import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader } from '../../components/ui/card';

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupForm>();

  const password = watch('password');

  const onSubmit = async (data: SignupForm) => {
    setLoading(true);
    try {
      await signup(data.name, data.email, data.password);
      toast.success('Account created successfully!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-orange-900/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded">
                <img
                  className="w-6 h-6 m-1"
                  alt="Logo"
                  src="/group-70.png"
                />
              </div>
              <span className="text-2xl font-bold text-white font-['Figtree']">
                IMRO
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white font-['Onest']">
              Create Account
            </h1>
            <p className="text-gray-400 font-['Onest']">
              Join thousands of satisfied users
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                  type="text"
                  placeholder="Full name"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Input
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  type="password"
                  placeholder="Password"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div>
                <Input
                  {...register('confirmPassword', { 
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  type="password"
                  placeholder="Confirm password"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-['Onest'] py-3"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 font-['Onest']">
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link 
                to="/" 
                className="text-gray-400 hover:text-white text-sm font-['Onest']"
              >
                ← Back to home
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};