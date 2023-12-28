import React from 'react';
import logo11 from '../img/logo11.png';
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
      <div className={`bg-blue-900 ${(isHomePage) ? "hidden" : ""}`}>
        <nav className={`ml-4 md:ml-20 mb-6 md:w-[1360px] `}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img src={logo11} className="h-20 md:h-28 mr-3" alt="Logo" />
            </Link>

            <div className="flex md:order-2 items-center relative">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="py-2 text-white bg-[#5354a8b0] hover:bg-[#536496] shadow-lg shadow-blue-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-4 text-center border border-blue-100"
                >
                  login / sign in
                </button>
                {isOpen && (
                  <div className="absolute z-10 right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg py-1 ">
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



            <nav className="hidden md:flex md:justify-between md:items-center md:mx-auto md:max-w-screen-xl md:px-4">
      
        <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center">
          <li>
            <Link
              to="/"
              className="py-2 px-3 text-white rounde hover:text-emerald-300"
              aria-current="page"
            >
          HOME
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="py-2 px-3 text-white rounded hover:text-emerald-300"
            >
             OUR TEAM
            </Link>
          </li>
          <li>
            <Link
              to="/ServicesCardHome"
              className="py-2 px-3 text-white rounded hover:text-emerald-300"
            >
               SERVICES
            </Link>
          </li>
          {isUser && (
            <>
              <li>
                <Link
                  to="/ContactUs"
                  className="py-2 px-3 text-white rounded hover:text-emerald-300"
                >
               CONTACT
                </Link>
              </li>
              <li>
                <Link
                  to="/Profile"
                  className="py-2 px-3 text-white rounded hover:text-emerald-300"
                >
                   PROFILE
                </Link>
              </li>
              
            </>
          )}
        </ul>
      </nav>
          </div>
        </nav >
      </div >
    </>
  );
}

export default NavBar;
