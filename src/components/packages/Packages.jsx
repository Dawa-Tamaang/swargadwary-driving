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
      <div className="relative">
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
        <div className="relative z-10 sm:text-xl md:text-4xl mx-4 md:mx-28 font-bold flex items-center sm:pt-28 pt-16  text-center px-4">
          <h1>OUR COURSES</h1>
        </div>
      </div>
      <div className="mx-28 pb-4">
          <h3 className="sm:text-xl md:text-5xl font-bold font-serif text-center mt-0 sm:pt-28 pt-40 pb-5">OUR PACKAGES</h3>
          <hr className="w-1/4 border-t-4 border-blue-500 sm:mt-2 mt-0 mb-5 mx-auto" />
        </div>
      <div className="container mx-10 sm:mx-auto p-4 h-full w-3/4 sm:p-8 mb-8 grid md:grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-12">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-full md:max-w-xl mx-auto bg-gray-200 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 md:h-56 w-full object-cover"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {card.head}
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                  {card.title}
                </h2>
                <p className="mt-2 text-gray-500">
                  {card.description.substring(0, 80)}...
                </p>
                <Link
                  to={card.link}
                  className="mt-4 inline-block text-indigo-500 hover:text-indigo-800"
                >
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
                    Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Packages;
