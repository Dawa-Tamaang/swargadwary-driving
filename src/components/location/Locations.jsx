import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '80vw',
  height: '80vh',
  margin: '0 auto',
};

// const mapContainerStyleMobile = {
//   width: '80vw',
//   height: '20vh',
//   margin: '0 auto',
// };

const center = {
  lat: 28.131,
  lng: 82.29726,
};

const Locations = () => {
  const [selected, setSelected] = useState(null);

  const markers = [
    { id: 1, position: { lat: 28.130989, lng: 82.297261 }, info: "Nepaljung" },
  ];

  return (
    <>
    <div className="relative min-h-screen">
        <img
          src="/img2.jpg"
          alt="Motors Home"
          className="absolute bg-black inset-0 w-full h-56 object-cover opacity-70"
        />
        <div className="absolute top-0 left-0 p-4 ml-5">
          <Link
            to="/"
            className="text-black text-xl font-bold hover:text-white py-2 px-4 flex items-center"
          >
            <FontAwesomeIcon icon={faHouse} className="mr-2" />
            Home
          </Link>
        </div>
        <div className="relative z-10 sm:text-xl md:text-4xl mx-28 font-bold flex items-center sm:pt-24 pt-10 text-center px-4">
          <h1>LOCATION.</h1>
        </div>
        <div className="mx-28 sm:pb-20 pb-6">
          <h3 className="sm:text-xl md:text-5xl font-bold font-serif text-center mt-8 pt-28 pb-5">LOCATION</h3>
          <hr className="w-1/4 border-t-4 border-blue-500 sm:mt-0 md:mt-2 sm:mb-5 mb-0 mx-auto" />
        </div>
        <div className="map-container">
          <LoadScript googleMapsApiKey="AIzaSyApFusiKg5ilDJ9UMtnemhccBlXsC7CZxs">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
            >
              {markers.map(marker => (
                <Marker
                  key={marker.id}
                  position={marker.position}
                  onClick={() => setSelected(marker)}
                />
              ))}
              {selected && (
                <InfoWindow
                  position={selected.position}
                  onCloseClick={() => setSelected(null)}
                >
                  <div>
                    <h2>{selected.info}</h2>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      {/* <style jsx>{`
        @media (max-width: 768px) {
          .map-container {
            height: 20vh;
          }
        }
      `}</style> */}
    </>
  );
}

export default Locations;
