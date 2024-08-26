import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8 py-8 bottom-0 w-full ">
      <div className="container px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-6 md:mb-0 sm:ml-28 ml-4">
            <h2 className="font-bold text-lg mb-4">NEW SWARGADWARY DRIVING CENTER</h2>
            <p className="text-justify text-gray-300">
            Welcome to New Swargadwary Driving Center. We are always dedicated to the service for here. 
            We started our services from 15th Asar 2081 BS. We are improving the services condition according to the public demand. 
            We are trying to find some land to extend our service to reach up to the government license trial center.
          </p>          
        </div>
          <div className="md:w-1/3 mb-6 md:mb-0 sm:ml-48 ml-6">
            <h2 className="font-bold text-lg mb-4">QUICK LINKS</h2>
            <al>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Packages</a></li>
              {/* <li className="mb-2"><a href="#" className="hover:underline">Exam Test</a></li> */}
              <li className="mb-2"><a href="#" className="hover:underline">Instructors</a></li>
              {/* <li><a href="#" className="hover:underline">Photo Gallery</a></li>
              <li><a href="#" className="hover:underline">Location</a></li> */}
            </al>
          </div>
          <div className="md:w-1/3 mr-28">
            <h2 className="font-bold text-lg mb-4">CONTACT US</h2>
            <ul>
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2"/>
                Tulsipur, Dang, Nepal
              </li>
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2"/>
                +977 985-7840366, +977 980-9554906
              </li>
              <li className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
                nsdc366@gmail.com
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-2"/>
                Time: 06:00 AM - 06:00 PM
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-4 w-full" />
        {/* <div className="mb-8 text-center mr-28">
          <a href="#about" className="mx-2 hover:text-blue-300">About Us</a>
          <a href="#packages" className="mx-2 hover:text-blue-300">Packages</a>
          <a href="#examtest" className="mx-2 hover:text-blue-300">Exam Test</a>
          <a href="#sign" className="mx-2 hover:text-blue-300">Traffic Sign</a>
          <a href="#instructors" className="mx-2 hover:text-blue-300">Instructors</a>
          <a href="#gallery" className="mx-2 hover:text-blue-300">Photo Gallery</a>
          <a href="#location" className="mx-2 hover:text-blue-300">Location</a>
        </div> */}
        {/* <p className="mt-2 text-center text-xs mr-8">
          &copy; 2024 New Swargadwary Driving Center. All rights reserved. | +977-981234567  |  Designed and Developed By: Ashmin Kumar Khadka
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
