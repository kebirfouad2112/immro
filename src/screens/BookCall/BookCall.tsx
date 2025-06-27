import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon, MailIcon, PhoneIcon } from 'lucide-react';

interface BookCallForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export const BookCall: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<BookCallForm>();

  const serviceTypes = [
    'Cleaning Services',
    'Plumbing',
    'Electrical Services',
    'Emergency Help (Dépannage)',
    'Mechanics',
    'Other'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const onSubmit = async (data: BookCallForm) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/bookings', data);
      toast.success('Your call has been booked! We\'ll contact you soon.');
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to book call');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-orange-900/10" />
      
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeftIcon className="w-5 h-5 text-white" />
            <span className="text-white font-['Onest']">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded">
              <img className="w-6 h-6 m-1" alt="Logo" src="/group-70.png" />
            </div>
            <span className="text-2xl font-bold text-white font-['Figtree']">IMRO</span>
          </div>
        </div>
      </header>

      <div className="relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-white font-['Onest'] mb-4">
              Book Your Free
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"> Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 font-['Onest'] max-w-2xl mx-auto">
              Ready to transform your business with AI automation? Let's discuss your needs and create a custom solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <h2 className="text-2xl font-bold text-white font-['Onest']">
                  Schedule Your Call
                </h2>
                <p className="text-gray-400 font-['Onest']">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          placeholder="Full Name"
                          className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <MailIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          type="email"
                          placeholder="Email Address"
                          className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input
                          {...register('phone', { required: 'Phone number is required' })}
                          type="tel"
                          placeholder="Phone Number"
                          className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        {...register('company')}
                        type="text"
                        placeholder="Company Name (Optional)"
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <select
                        {...register('serviceType', { required: 'Please select a service type' })}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:border-blue-500 focus:outline-none"
                      >
                        <option value="">Select Service Type</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="text-red-400 text-sm mt-1">{errors.serviceType.message}</p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Input
                          {...register('preferredDate', { required: 'Please select a preferred date' })}
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="pl-10 bg-gray-800 border-gray-600 text-white focus:border-blue-500"
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-red-400 text-sm mt-1">{errors.preferredDate.message}</p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <ClockIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <select
                          {...register('preferredTime', { required: 'Please select a preferred time' })}
                          className="w-full pl-10 px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:border-blue-500 focus:outline-none"
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                      {errors.preferredTime && (
                        <p className="text-red-400 text-sm mt-1">{errors.preferredTime.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about your project and what you'd like to discuss..."
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-md focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-['Onest'] py-3 text-lg"
                  >
                    {loading ? 'Booking Your Call...' : 'Book Free Consultation'}
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-white font-['Onest'] mb-3">
                    What to Expect:
                  </h3>
                  <ul className="space-y-2 text-gray-300 font-['Onest']">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      30-minute consultation call
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Custom AI automation strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      No-obligation proposal
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Implementation roadmap
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};