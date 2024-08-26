import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const teamData = [
  {
    name: "Full Name",
    role: "Instructor",
    description:
      "Full Name is a highly experienced instructor with a passion for teaching safe driving techniques.",
    image: "/dummyprofile.jpg",
  },
  {
    name: "Full Name",
    role: "Instructor",
    description:
      "Full Name is a highly experienced instructor with a passion for teaching safe driving techniques.",
    image: "/dummyprofile.jpg",
  },
  {
    name: "Full Name",
    role: "Instructor",
    description:
      "Full Name is a highly experienced instructor with a passion for teaching safe driving techniques.",
    image: "/dummyprofile.jpg",
  },
  {
    name: "Full Name",
    role: "Instructor",
    description:
      "Full Name is a highly experienced instructor with a passion for teaching safe driving techniques.",
    image: "/dummyprofile.jpg",
  },
];

const Instructors = () => {
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
        <div className="relative z-10 sm:text-xl text-sm md:text-4xl mx-28 font-bold sm:pt-24 pt-3 px-4">
          <h1>YOUR JOURNEY TO BECOMING A SKILLED DRIVER STARTS HERE.</h1>
        </div>
        <div className="mx-28 pb-24">
          <h3 className="sm:text-xl md:text-5xl font-bold font-serif text-center sm:mt-8 mt-6 pt-28 pb-5">
            OUR TEAM MEMBERS
          </h3>
          <hr className="w-1/4 border-t-4 border-blue-500 md:mt-2 sm:mt-0 mb-5 mx-auto" />
          <div className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-28 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-2xl rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                  <h3 className="text-gray-700 mb-4">{member.role}</h3>
                  <p className="text-gray-600">{member.description}</p>
                  <Link
                    to={`/profile/${member.name
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="mt-4 inline-block text-indigo-500 hover:text-indigo-800"
                  >
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
                      View profile
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructors;
