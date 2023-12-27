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
import HouseForm from './JSX/HouseForm';
import CompanyForm from './JSX/CompanyForm';
import Home from './JSX/Home';
import Signup from './JSX/SignUp'
import ProfilePage from './JSX/ProfileForm'
import Dashboard from './JSX/Dashboard';
import UserTable from './JSX/UserTable';
import AdmainUser from './JSX/AdmainUser';
import ServicesTable from './JSX/ServicesTable';
import Profile from './JSX/Profile';
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
import OfficeForm from './JSX/OfficeForm';
import SchoolForm1 from './JSX/SchoolForm';
import FirebaseImageUpload from './FireBase/FirebaseImageUpload';
import PaymentInformation from './JSX/PaymentInformation';







function App() {
  const [role, setRole] = useState(() => {
    const storedRole = localStorage.getItem('role');
    return storedRole ? parseInt(storedRole, 10) : 0;
  });
  
  useEffect(() => {
    if (localStorage) {
      const storedRole = localStorage.getItem('role');
      setRole(parseInt(storedRole, 10));
    }
  }, []);
  

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Route path="/ServiceDetailsHome/:id" element={<ServiceDetailsHome/>} />
            <Route path='/AboutUs' element={<AboutUs />} />
        
            {/* <Route path='/FirebaseImageUpload' element={<FirebaseImageUpload />} /> */}
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
            <Route path='/OfficeForm' element={<OfficeForm />} />
            <Route path='/CompanyForm' element={<CompanyForm />} />
            <Route path='/SchoolForm' element={<SchoolForm />} />
            <Route path='/HouseForm' element={<HouseForm />} />
          </Routes>
          <Dashboard />
        </BrowserRouter>
      }


      {role === 2 &&
        <BrowserRouter>
                  <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
       
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ProfileForm' element={<ProfileForm />} />
            <Route path='/Payment2' element={<Payment2 />} />
            <Route path='/ThankYou' element={<ThankYou />} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/ServicesCardHome" element={<ServicesCardHome/>} />
            <Route path="/ServiceDetailsHome/:id" element={<ServiceDetailsHome/>} />
            <Route path='/OfficeForm' element={<OfficeForm />} />
            <Route path='/CompanyForm' element={<CompanyForm />} />
            <Route path='/SchoolForm1' element={<SchoolForm1 />} />
            <Route path='/HouseForm' element={<HouseForm />} />
            <Route path='/PaymentInformation' element={<PaymentInformation />} />
            
          </Routes>
          <Footer />
      
        </BrowserRouter>
      }

    </div>


  );
}

export default App;

