import React from "react";


const Instructors = () => {
  return (
    <div className="relative min-h-screen max-w-full">
        
        <div className='relative h-[300px] overflow-hidden bg-slate-800 md:p-5'>
          <div className='absolute inset-0'>
            <img src="/img2.jpg" alt="" className='h-[300px] w-full object-cover opacity-70' />
          </div>
          <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 text-center md:px-2'>
            <h1 className='mt-20 text-5xl font-semibold uppercase leading-tight text-white md:text-6xl'>Instructors</h1>
          </div>
        </div>
        <div className='lg:w-2/3 space-y-5 text-center mx-auto mt-20 mb-12'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>Course Inspectors</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
            <p className='text-gray-600 dark:text-gray-300 text-base leading-6'>Our Certified Instructors</p>
        </div>
        
      </div>
  );
};

export default Instructors;
