const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/imro-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Booking Schema
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  serviceType: { type: String, required: true },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  message: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'rejected'], default: 'pending' },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Middleware to verify admin
const requireAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Auth Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Booking Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: booking.email,
      subject: 'Booking Confirmation - IMRO',
      html: `
        <h2>Thank you for your booking request!</h2>
        <p>Dear ${booking.name},</p>
        <p>We have received your booking request for <strong>${booking.serviceType}</strong>.</p>
        <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${booking.preferredTime}</p>
        <p>We will review your request and get back to you within 24 hours.</p>
        <p>Best regards,<br>IMRO Team</p>
      `,
    };

    // Send notification email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Booking Request - IMRO',
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Company:</strong> ${booking.company || 'N/A'}</p>
        <p><strong>Service Type:</strong> ${booking.serviceType}</p>
        <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${booking.preferredTime}</p>
        <p><strong>Message:</strong> ${booking.message || 'N/A'}</p>
      `,
    };

    // Send emails (don't wait for them to complete)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter.sendMail(customerMailOptions).catch(console.error);
      transporter.sendMail(adminMailOptions).catch(console.error);
    }

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Admin Routes
app.get('/api/admin/bookings', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.patch('/api/admin/bookings/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Send status update email to customer
    const statusMailOptions = {
      from: process.env.EMAIL_USER,
      to: booking.email,
      subject: `Booking ${status.charAt(0).toUpperCase() + status.slice(1)} - IMRO`,
      html: `
        <h2>Booking Status Update</h2>
        <p>Dear ${booking.name},</p>
        <p>Your booking request for <strong>${booking.serviceType}</strong> has been <strong>${status}</strong>.</p>
        ${status === 'confirmed' ? 
          `<p>We will contact you soon to finalize the details.</p>` :
          `<p>Unfortunately, we cannot accommodate your request at this time. Please feel free to submit another request.</p>`
        }
        <p>Best regards,<br>IMRO Team</p>
      `,
    };

    // Send email (don't wait for it to complete)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      transporter.sendMail(statusMailOptions).catch(console.error);
    }

    res.json({ message: 'Booking status updated successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create default admin user
const createDefaultAdmin = async () => {
  try {
    const adminExists = await User.findOne({ isAdmin: true });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const admin = new User({
        name: 'Admin',
        email: 'admin@imro.com',
        password: hashedPassword,
        isAdmin: true,
      });
      await admin.save();
      console.log('Default admin created: admin@imro.com / admin123');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  createDefaultAdmin();
});