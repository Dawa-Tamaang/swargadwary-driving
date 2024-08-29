import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Packages = () => {
  const cardData = [
    {
      head: "How to Drive a Car?",
      image: "/img4.jpg",
      title: "Our Car Driving Lesson 1",
      description:
        "Driving is the controlled operation and movement of a motor vehicle, including cars, motorcycles, trucks, and buses. Permission to drive on public highways is granted based on a set of conditions being met and drivers are required to follow the established road and traffic laws in the location they are driving.",
      link: "/details1",
    },
    {
      head: "How to drive Motorcycle? ",
      image: "/img5.jpg",
      title: "Motorcycle Driving Lesson ",
      description:
        "When you think of a two-wheeled vehicle, the first things that may come to mind is a motorcycle or scooter, or perhaps even a moped. All three are considered great forms of transportation for commuting, or when one simply does not prefer a car. However, have you wondered what the differences are between the three two-wheeled vehicles? Aesthetically, they’re quite different, but what are the fundamental differences that set them apart? Don’t worry, we’ve got you covered. We’ll delve into the characteristics of mopeds vs. scooters vs. motorcycles to help you make an informed decision on what type of two-wheel transportation will be best for your riding situation. ",
      link: "/details2",
    },
    {
      head: "Pre Test for your confidence.",
      image: "/img1.jpg",
      title: "Our Pre Test Lesson. ",
      description:
        "We all pick up ‘bad habits’ over time but this can mean the end of your driving test if your not aware of them and correct them in time. Our Driving Instructors will take you out on a rigorous pre-test lesson and mock – test scenario to test how ready you are for your Irish Driving Test. ",
      link: "/details3",
    },
    {
      head: "How to drive Motorcycle? ",
      image: "/img4.jpg",
      title: "Our Car Driving Lesson 4",
      description:
        "Driving is the controlled operation and movement of a motor vehicle, including cars, motorcycles, trucks, and buses. Permission to drive on public highways is granted based on a set of conditions being met and drivers are required to follow the established road and traffic laws in the location they are driving.",
      link: "/details4",
    },
  ];

  return (
    <>
      <div className='relative h-[300px] overflow-hidden bg-slate-800 md:p-5'>
          <div className='absolute inset-0'>
            <img src="/img2.jpg" alt="" className='h-[300px] w-full object-cover opacity-70' />
          </div>
          <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 text-center md:px-2'>
            <h1 className='mt-20 text-5xl font-semibold uppercase leading-tight text-white md:text-6xl'>Packages</h1>
          </div>
        </div>
        <div className='lg:w-2/3 space-y-5 text-center mx-auto mt-20 mb-10'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>Our Packages</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
            <p className='text-gray-600 dark:text-gray-300 text-base leading-6'>Please review our packages, which are provided below.</p>
        </div>
        <div className="flex flex-col px-10 mb-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">S.N</th>
                      <th scope="col" className="px-6 py-4">Car/Jeep</th>
                      <th scope="col" className="px-6 py-4">Price</th>
                      <th scope="col" className="px-6 py-4">Bike/Scooter</th>
                      <th scope="col" className="px-6 py-4">Price</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td className="whitespace-nowrap px-6 py-4">30 Days Package</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs. 15,000</td>
                      <td className="whitespace-nowrap px-6 py-4">Full Package</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs. 8,000</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                      <td className="whitespace-nowrap px-6 py-4">15 Days Package</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs. 8,000</td>
                      <td className="whitespace-nowrap px-6 py-4">Per Day</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs. 500</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                      <td className="whitespace-nowrap px-6 py-4">7 Days Package</td>
                      <td className="whitespace-nowrap px-6 py-4">Rs. 4,000</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Packages;
