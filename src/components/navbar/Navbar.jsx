import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`bg-white p-4 shadow-md ${isScrolled ? 'fixed top-0 w-full z-50' : 'relative'}`}>
        <div className="flex justify-between items-center mx-28">
          <img src="/logo.jpeg" alt="Logo" className="h-10" />
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/home" className="text-gray-800 font-semibold hover:text-blue-800" activeClassName="text-blue-800 underline">
              HOME
            </NavLink>
            <NavLink to="/packages" className="text-gray-800 font-semibold hover:text-blue-800" activeClassName="text-blue-800 underline">
              PACKAGES
            </NavLink>
            {/* <NavLink to="/instructors" className="text-gray-800 font-semibold hover:text-blue-800" activeClassName="text-blue-800 underline">
              INSTRUCTORS
            </NavLink> */}
            <NavLink to="/downloads" className="text-gray-800 font-semibold hover:text-blue-800" activeClassName="text-blue-800 underline">
              DOWNLOADS
            </NavLink>
            <NavLink to="/about" className="text-gray-800 font-semibold hover:text-blue-800" activeClassName="text-blue-800 underline">
              ABOUT US
            </NavLink>
            <NavLink to="/ContactUs" className="text-gray-800 font-semibold hover:text-blue-800" activeClassName="text-blue-800 underline">
              CONTACT US
            </NavLink>
            {/* <NavLink to="/photos" className="text-gray-800 hover:text-blue-800 hover:underline" activeClassName="text-blue-800 underline">
              PHOTO GALLERY
            </NavLink>
            <NavLink to="/location" className="text-gray-800 hover:text-blue-800 hover:underline" activeClassName="text-blue-800 underline">
              OUR LOCATION
            </NavLink> */}
          </nav>
          <div className="hidden md:flex space-x-4">
            <a href="https://www.facebook.com/newswargadwarydrivingcenter/" className="text-gray-800 hover:text-blue-800"><FaFacebook /></a>
            <a href="https://www.youtube.com" className="text-gray-800 hover:text-blue-800"><FaYoutube /></a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-gray-800 hover:text-blue-800">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-center bg-white shadow-2xl mt-2">
<NavLink onClick={toggleMenu} to="/packages" className="text-gray-800 hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              HOME
            </NavLink>
            
            <NavLink onClick={toggleMenu} to="/packages" className="text-gray-800 font-semibold hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              PACKAGES
            </NavLink>
            {/* <NavLink onClick={toggleMenu} to="/instructors" className="text-gray-800 font-semibold hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              INSTRUCTORS
            </NavLink> */}
            <NavLink onClick={toggleMenu} to="/downloads" className="text-gray-800 font-semibold hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              DOWNLOADS
            </NavLink>
            <NavLink onClick={toggleMenu} to="/about" className="text-gray-800 font-semibold hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              ABOUT US
            </NavLink>
            <NavLink onClick={toggleMenu} to="/ContactUs" className="text-gray-800 font-semibold hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              CONTACT US
            </NavLink>
            {/* <NavLink onClick={toggleMenu} to="/photos" className="text-gray-800 hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              PHOTO GALLERY
            </NavLink>
            <NavLink onClick={toggleMenu} to="/location" className="text-gray-800 hover:text-blue-800 hover:underline py-2" activeClassName="text-blue-800 underline">
              OUR LOCATION
            </NavLink> */}
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
