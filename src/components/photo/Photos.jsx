import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Photos = () => {
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
        <div className="relative z-10 sm:text-xl md:text-5xl mx-28 font-bold flex items-center sm:pt-24 pt-4 text-center px-4">
          <h1>PHOTOS.</h1>
        </div>
        <div className="mx-28 pb-24">
          <h3 className="sm:text-xl md:text-5xl font-bold font-serif text-center mt-8 pt-28 pb-5">PHOTOS</h3>
          <hr className="w-1/4 border-t-4 border-blue-500 sm:mt-0 md:mt-2 mb-5 mx-auto" />
          <div className='p-8 grid md:grid-cols-5 grid-cols-2 gap-8'>
            <img src='/img1.jpg' className='w-full h-28 sm:h-56'/>
            <img src='/img1.jpg' className='w-full h-28 sm:h-56'/>
            <img src='/img1.jpg' className='w-full h-28 sm:h-56'/>
            <img src='/img1.jpg' className='w-full h-28 sm:h-56'/>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Photos
