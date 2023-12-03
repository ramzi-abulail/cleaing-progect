import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../img/logo.png';

function LoginAdmin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch user data based on the entered email
      const response = await axios.get(`http://localhost:3001/AdmainUser?email=${formData.email}`);
      
      // Check if the user exists and the password matches
      if (response.data.length > 0 && response.data[0].password === formData.password) {
        console.log('Login successful!', response.data[0]);
        // Perform actions after successful login
        

        localStorage.setItem('role' , 1)
        navigate('/');
     
      } else {
        console.error('Invalid credentials!');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:border-gray-700">
        <div className="p-6 space-y-4">
          <div className="flex items-center mb-6">
            <img className="w-40 h-20 ml-32" src={logo} alt="Logo" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome back,<br></br>
            Sign in
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-900 dark:text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-medium text-gray-900 dark:text-white">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-500 focus:ring focus:ring-primary-300 focus:outline-none"
            >
              Sign in
            </button>
            <div className="text-center">
              <Link to="/forgot-password" className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500">
                Forgot your password?
              </Link>
              <p className="mt-2">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginAdmin;
