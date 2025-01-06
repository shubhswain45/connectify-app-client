import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormErrors {
  [key: string]: string;
}

const SpotifyLogin: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {};

    if (!formData.username) {
      newErrors.username = 'Email address or username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
      <div className="w-full max-w-xl px-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-8">Log in to Spotify</h1>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4 mb-8">
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2"
          >
            Continue with Facebook
          </button>
          <button
            type="button"
            className="w-full bg-white hover:bg-gray-100 text-black py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2"
          >
            Continue with Google
          </button>
          <button
            type="button"
            className="w-full border border-gray-400 hover:border-white text-white py-3 px-4 rounded-full font-bold flex items-center justify-center gap-2"
          >
            Continue with Apple
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-gray-400">or</span>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email/Username */}
          <div>
            <label className="block mb-2 font-bold">
              Email address or username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
              placeholder="Email address or username"
            />
            {errors.username && (
              <div className="text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.username}</span>
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-bold">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-900 border border-gray-700 focus:border-white focus:outline-none"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <div className="text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="w-4 h-4 mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black py-3 px-4 rounded-full font-bold mt-8"
          >
            Log In
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-white hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="text-white hover:underline">
                Sign up for Spotify
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpotifyLogin;