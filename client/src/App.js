import logo from './logo.svg';
import './App.css';
import Login from './JSX/Login';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import NavBar from './JSX/NavBar';
import Footer from './JSX/Footer';
import AboutUs from './JSX/AboutUs';
import ContactUs from './JSX/ContactUs';
import OurServices from './JSX/OurServices';
import SchoolForm from './JSX/SchoolForm';
import MyForm from './JSX/OfficeForm';
import HouseForm from './JSX/HouseForn';
import CompanyForm from './JSX/CompanyForm';
import Home from './JSX/Home';
import Signup from './JSX/SignUp'
import ProfilePage from './JSX/ProfileForm'
import Dashboard from './JSX/Dashboard';
import UserTable from './JSX/UserTable';
import AdmainUser from './JSX/AdmainUser';
import ServicesTable from './JSX/ServicesTable';
import Profile from './JSX/Profile';
import OurServices1 from './JSX/OurServicesMainPage';
import HouseCleaningDetails from './JSX/HouseCleaningDetails';
import OfficeCleaningDetails from './JSX/OfficeCleaningDetails';
import CompanyCleaningDetails from './JSX/CompanyCleaningDetails';
import SchoolCleaningDetails from './JSX/SchoolCleaningDetails';
import ProfileForm from './JSX/ProfileForm';
import LoginAdmin from './JSX/LoginAdmin';
import InfoForm from './JSX/SignUp';
import ThankYou from './JSX/ThankYou';
import Payment2 from '../src/JSX/Payment2';
import React, { useEffect, useState } from 'react';
import ServicesCard from './JSX/ServicesCard';
import ServiceDetails from './JSX/ServiceDetails';
import ServicesCardHome from './JSX/ServicesCardHome';
import ServiceDetailsHome from './JSX/ServiceDetailsHome';






function App() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    if (localStorage) {
      const storedRole = localStorage.getItem('role');
      setRole(parseInt(storedRole, 10));
    }
  }, []);


  console.log(role);
  return (
    <div>

      {role !== 1 && role !==2 &&

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/LoginAdmin' element={<LoginAdmin />} />
            <Route path="/ServicesCardHome" element={<ServicesCardHome/>} />
            <Route path="/details/:id" element={<ServiceDetailsHome/>} />
       
          </Routes>
          <Footer />

        </BrowserRouter>
      }



      {role === 1 &&
        <BrowserRouter>
          <Routes>
            <Route path='/UserTable' element={<UserTable />} />
            <Route path='/AdmainUser' element={<AdmainUser />} />
            <Route path='/ServicesCard' element={<ServicesCard />} />
            <Route path="/details/:id" element={<ServiceDetails/>} />
          </Routes>
          <Dashboard />
        </BrowserRouter>
      }


      {role === 2 &&
        <BrowserRouter>
                  <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/OurServices' element={<OurServices />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/HouseForm' element={<HouseForm />} />
            <Route path='/MyForm' element={<MyForm />} />
            <Route path='/CompanyForm' element={<CompanyForm />} />
            <Route path='/SchoolForm' element={<SchoolForm />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/OurServices' element={<OurServices />} />
            <Route path='/HouseCleaningDetails' element={<HouseCleaningDetails />} />
            <Route path='/OfficeCleaningDetails' element={<OfficeCleaningDetails />} />
            <Route path='/CompanyCleaningDetails' element={<CompanyCleaningDetails />} />
            <Route path='/SchoolCleaningDetails' element={<SchoolCleaningDetails />} />
            <Route path='/ProfileForm' element={<ProfileForm />} />
            <Route path='/LoginAdmin' element={<LoginAdmin />} />
            <Route path='/InfoForm' element={<InfoForm />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Payment2' element={<Payment2 />} />
            <Route path='/ThankYou' element={<ThankYou />} />
            <Route path="/details/:id" element={<ServiceDetails/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }

    </div>


  );
}

export default App;

