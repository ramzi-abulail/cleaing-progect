import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';

function Login() {
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
      // Fetch users data from JSON server
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      console.log(users);
      // Check if the entered credentials match with any user
      const foundUser = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (foundUser) {
        console.log('Login successful!', foundUser);
        // Perform actions after successful login
        navigate('/'); // Redirect to Home page after successful login
      } else {
        console.error('Invalid credentials!');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="md:w-30 md:h-20 mr-2" src={logo} alt="Logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome back,<br></br>
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
