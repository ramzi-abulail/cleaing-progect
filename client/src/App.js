import logo from './logo.svg';
import './App.css';
import Login from './JSX/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './JSX/Test';
import NavBar from './JSX/NavBar';
import Footer from './JSX/Footer';
import HeroSlider from './JSX/HeroSlider';
import HeroSection from './JSX/HeroSection';
import AboutUs from './JSX/AboutUs';
import AboutUsSection from './JSX/AboutUsSection';
import ContactUs from './JSX/ContactUs';
import SchoolForm1 from './JSX/SchoolForm1';
import Counter from './JSX/Counter';



function App() {
  return (

    <div className='bg-blue-100'>
      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<SchoolForm1/>} />


        </Routes>




        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
