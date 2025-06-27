import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  CheckIcon, 
  XIcon, 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  MailIcon, 
  PhoneIcon,
  BuildingIcon,
  MessageSquareIcon,
  LogOutIcon
} from 'lucide-react';

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'rejected';
  createdAt: string;
}

export const AdminPanel: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'rejected'>('all');
  const { user, logout } = useAuth();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/bookings');
      setBookings(response.data);
    } catch (error) {
      toast.error('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId: string, status: 'confirmed' | 'rejected') => {
    try {
      await axios.patch(`http://localhost:5000/api/admin/bookings/${bookingId}`, { status });
      setBookings(bookings.map(booking => 
        booking._id === bookingId ? { ...booking, status } : booking
      ));
      toast.success(`Booking ${status} successfully`);
    } catch (error) {
      toast.error(`Failed to ${status} booking`);
    }
  };

  const filteredBookings = bookings.filter(booking => 
    filter === 'all' || booking.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'confirmed': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-orange-900/10" />
      
      {/* Header */}
      <header className="relative z-10 px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded">
                <img className="w-6 h-6 m-1" alt="Logo" src="/group-70.png" />
              </div>
              <span className="text-2xl font-bold text-white font-['Figtree']">IMRO</span>
            </div>
            <Badge className="bg-blue-600 text-white">Admin Panel</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-white font-['Onest']">Welcome, {user?.name}</span>
            <Button
              onClick={logout}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <LogOutIcon className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white font-['Onest'] mb-2">
              Booking Management
            </h1>
            <p className="text-gray-400 font-['Onest']">
              Manage and respond to customer booking requests
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          >
            {[
              { label: 'Total Bookings', value: bookings.length, color: 'blue' },
              { label: 'Pending', value: bookings.filter(b => b.status === 'pending').length, color: 'yellow' },
              { label: 'Confirmed', value: bookings.filter(b => b.status === 'confirmed').length, color: 'green' },
              { label: 'Rejected', value: bookings.filter(b => b.status === 'rejected').length, color: 'red' },
            ].map((stat, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-white font-['Onest']">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-['Onest']">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex gap-2">
              {['all', 'pending', 'confirmed', 'rejected'].map((status) => (
                <Button
                  key={status}
                  onClick={() => setFilter(status as any)}
                  variant={filter === status ? 'default' : 'outline'}
                  className={filter === status 
                    ? 'bg-blue-600 text-white' 
                    : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                  }
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Bookings List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {filteredBookings.length === 0 ? (
              <Card className="bg-gray-900/80 border-gray-700">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-400 font-['Onest']">
                    No bookings found for the selected filter.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredBookings.map((booking) => (
                <Card key={booking._id} className="bg-gray-900/80 border-gray-700">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <UserIcon className="w-5 h-5 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white font-['Onest']">
                          {booking.name}
                        </h3>
                        <Badge className={`${getStatusColor(booking.status)} text-white`}>
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400 font-['Onest']">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <MailIcon className="w-4 h-4" />
                          <span className="font-['Onest']">{booking.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <PhoneIcon className="w-4 h-4" />
                          <span className="font-['Onest']">{booking.phone}</span>
                        </div>
                        {booking.company && (
                          <div className="flex items-center gap-2 text-gray-300">
                            <BuildingIcon className="w-4 h-4" />
                            <span className="font-['Onest']">{booking.company}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="font-['Onest']">{booking.preferredDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <ClockIcon className="w-4 h-4" />
                          <span className="font-['Onest']">{booking.preferredTime}</span>
                        </div>
                        <div className="text-gray-300 font-['Onest']">
                          <strong>Service:</strong> {booking.serviceType}
                        </div>
                      </div>
                    </div>

                    {booking.message && (
                      <div className="mb-4 p-3 bg-gray-800 rounded-lg">
                        <div className="flex items-start gap-2">
                          <MessageSquareIcon className="w-4 h-4 text-gray-400 mt-1" />
                          <div>
                            <div className="text-sm text-gray-400 font-['Onest'] mb-1">Message:</div>
                            <p className="text-gray-300 font-['Onest']">{booking.message}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {booking.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button
                          onClick={() => updateBookingStatus(booking._id, 'confirmed')}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckIcon className="w-4 h-4 mr-2" />
                          Confirm
                        </Button>
                        <Button
                          onClick={() => updateBookingStatus(booking._id, 'rejected')}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          <XIcon className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};