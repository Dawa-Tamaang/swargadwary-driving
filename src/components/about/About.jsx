import React from 'react';

import './About.css'
const About = () => {
  return (
    <>
      <div className="relative min-h-screen">
      <div className='relative h-[300px] overflow-hidden bg-slate-800 md:p-5'>
          <div className='absolute inset-0'>
            <img src="/img2.jpg" alt="" className='h-[300px] w-full object-cover opacity-70' />
          </div>
          <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 text-center md:px-2'>
            <h1 className='mt-20 text-5xl font-semibold uppercase leading-tight text-white md:text-6xl'>About Us</h1>
          </div>
        </div>
        <div className='lg:w-2/3 space-y-5 text-center mx-auto mt-20 mb-12'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>About Us</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
            <p className='text-gray-600 dark:text-gray-300 text-base leading-6'>We are dedicated for providing best driving lesson.</p>
        </div>
        <div>
               
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
