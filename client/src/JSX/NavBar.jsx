import React from 'react';
import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('role') !== null
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/');
  };

  const userRole = localStorage.getItem('role');
  const isAdmin = userRole === '1';
  const isUser = userRole === '2';
  const isGuest = !isAdmin && !isUser;

  const isHomePage =
    window.location.pathname === "/UserTable" || window.location.pathname === "/AdmainUser" || window.location.pathname === "/ServicesTable"

  return (
    <>
      <div className={`bg-blue-500 ${(isHomePage) ? "hidden" : ""}`}>
        <nav className={`ml-4 md:ml-20 mb-6 md:w-[1360px] `}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-16 md:h-20 mr-3" alt="Logo" />
            </Link>

            <div className="flex md:order-2 items-center relative">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2 border border-blue-300"
                >
                  login / sign in
                </button>
                {isOpen && (
                  <div className="absolute z-10 right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg py-1">
                    {isGuest && (
                      <Link to="/SignUp" onClick={() => setIsOpen(false)} className="block text-left px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 w-full">
                        Sign Up
                      </Link>
                    )}
                    {isGuest && (
                      <Link to="/Login" onClick={() => setIsOpen(false)} className="block text-left px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 w-full">
                        Login as User
                      </Link>
                    )}
                    {isGuest && (
                      <Link to="/LoginAdmin" onClick={() => setIsOpen(false)} className="block text-left px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 w-full">
                        Login as Admin
                      </Link>
                    )}
                    {(isAdmin || isUser) && (
                      <Link to="/" onClick={handleLogout} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">logout</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>



            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AboutUs"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ServicesCardHome"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </Link>
                </li>
                {(isUser) && (
                  <>
                <li>
                  <Link
                    to="/ContactUs"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
               

              
                    <li>
                      <Link
                        to="/Profile"
                        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Payment2"
                        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Payment
                      </Link>
                    </li>

                  </>
                )}
              </ul>
            </div>
          </div>
        </nav >
      </div >
    </>
  );
}

export default NavBar;
