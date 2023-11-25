import logo from './logo.svg';
import './App.css';
import Login from './JSX/Login';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Test from './JSX/Test';
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
import Users from './JSX/Users';
import ServicesTable from './JSX/ServicesTable';



function App() {
  return (
    <div>
      {/* <BrowserRouter>
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
          <Route path='/ProfilePage' element={<ProfilePage />} />
        </Routes>
        <Dashboard/>
        <Footer />
      </BrowserRouter> */}



      <BrowserRouter>

        <Routes>

          {/* <Route path='/Dashboard' element={<Dashboard />} /> */}

        </Routes>
        <Dashboard />
        {/* <Users /> */}
        <ServicesTable/>
      </BrowserRouter>



    </div>


  );
}

export default App;

