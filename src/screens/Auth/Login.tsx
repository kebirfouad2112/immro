import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardHeader } from '../../components/ui/card';

interface LoginForm {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      toast.success('Welcome back!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Login failed');
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
              Welcome Back
            </h1>
            <p className="text-gray-400 font-['Onest']">
              Sign in to your account
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-['Onest'] py-3"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 font-['Onest']">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Sign up
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