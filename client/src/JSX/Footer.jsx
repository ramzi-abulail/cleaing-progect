import React from 'react';
import logo from '../img/logo.png';

function Footer() {
  const userRole = localStorage.getItem('role');
  const isAdmin = userRole === '1';
  const isUser = userRole === '2';
  const isGuest = !isAdmin && !isUser;

  const isHomePage =
    window.location.pathname === "/UserTable" || window.location.pathname === "/AdmainUser"  || window.location.pathname === "/ServicesTable"  
  return (
    <div>
      <footer className={`bg-blue-500  dark:bg-gray-900  ${(isHomePage)? "hidden" : ""}`}>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="./">
                <img src={logo} className="h-16 md:h-24 mr-3" alt="Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h2 className="mb-4 text-sm font-semibold text-white uppercase">Follow us</h2>
                <ul className="text-white dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a href="https://github.com/ramzi-abulail" className="hover:underline">Github</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ramzi-abulail" className="hover:underline">Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-gray-400 mb-4 sm:mb-0">
              © 2023 <a href="./" className="hover:underline">Cleanex Clean</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
