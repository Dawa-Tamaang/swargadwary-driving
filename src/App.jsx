import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Packages from './components/packages/Packages';
import Downloads from './components/download/Downloads';
// import TrafficSign from './components/trafficsign/TrafficSign';
import Instructors from './components/instructor/Instructors';
import ContactUs from './components/contactus/contactus';
// import Photo from './components/photo/Photos';
// import OurLocation from './components/location/Locations';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        {/* <Route path="/traffic-sign" element={<TrafficSign />} /> */}
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/photos" element={<Photo />} /> */}
        {/* <Route path="/location" element={<OurLocation />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
