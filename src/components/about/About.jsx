import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './About.css'

const About = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <img 
          src='/img2.jpg'
          alt="Motors Home" 
          className="absolute bg-black inset-0 w-full h-56 object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 p-4 ml-5">
          <Link to="/" className="text-black text-xl font-bold hover:text-white py-2 px-4 flex items-center">
            <FontAwesomeIcon icon={faHouse} className="mr-2" />
            Home
          </Link>
        </div>
        <div className="relative z-10 sm:text-xl md:text-4xl md:mx-36 sm:mx-auto font-bold flex items-center sm:pt-32 pt-4 text-center px-4">
          <h1>WE ARE DEDICATED FOR PROVIDING BEST DRIVING LESSON.</h1>
        </div>
        <div>
          <h3 className="sm:text-xl md:text-5xl font-bold font-serif text-center pt-28 pb-5">ABOUT US</h3>
          <hr className="w-1/4 border-t-4 border-blue-500 sm:mt-2 mt-0 mb-5 mx-auto" />          
          <div className="text-lg mx-36 flex pb-48">
            <p className="text-justify text-gray-800 mr-20 w-9/12">
              Welcome to New Swargadwary Driving Center. We are always dedicated to the service for here. 
              We started our services from 15th Asar 2081 BS. We can improve the services condition according to the public demand. 
              We are trying to find some land to extend our service to reach up to the government license trial centre.
            </p>
            <img src='./img2.jpg' className="pt-2 h-5/6 w-7/12 rounded-sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
