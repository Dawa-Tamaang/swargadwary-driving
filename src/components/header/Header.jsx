import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="bg-blue-800 text-xs sm:text-sm text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 md:mx-28">
        <span className="text-center md:text-left">"Are you tired of walking? Learn to drive now!"</span>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faPhone} className="mt-1 md:mx-2 mx-1"/>+977 985-7840366 | +977 980-9554906
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 md:mx-28 mt-2 md:mt-0">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm md:mr-2 mr-1"/>Tulsipur, Dang, Nepal
        </div>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={faClock} className="text-sm md:pr-2 pr-1"/>Time: 06:00 AM – 06:00 PM
        </div>
      </div>
    </div>
  );
};

export default Header;
