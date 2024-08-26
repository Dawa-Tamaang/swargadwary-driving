import React from 'react';
import { Link } from 'react-router-dom';  // Import if you're using routing
import docInNepali from '../../assets/documentinnepali.pdf'; // Adjust paths as needed
import docInEnglish from '../../assets/documentinenglish.pdf'; // Adjust paths as needed
import examImage from '../../assets/exam.png'; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Card = ({ image, title, subtitle, downloadLink }) => (
  
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-50 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
      <a
        href={downloadLink}
        download={downloadLink.split('/').pop()} // Extract file name for download
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Download PDF
      </a>
    </div>
  </div>
);

const Downloads = () => {
  const cardData = [
    {
      title: 'Question Simple (In Nepali)',
      subtitle: 'प्रथम पररमार्गन २०७८ असोज',
      image: examImage,
      downloadLink: docInNepali,
    },
    {
      title: 'Question Simple (In English)',
      subtitle: 'First journey 2078 Oct.',
      image: examImage,
      downloadLink: docInEnglish,
    },
  ];

  return (
    <div className="relative min-h-screen max-w-full">
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
        <div className="relative z-10 sm:text-xl md:text-4xl mx-28 font-bold flex items-center sm:pt-24 pt-3 text-center px-4">
          <h1>YOU CAN VIEW AND DOWNLOAD THE LATEST UPDATES.</h1>
        </div>
        <div className="mx-28 pb-24">
            <h3 className="sm:text-xl md:text-5xl font-bold font-serif text-center sm:mt-8 mt-0 sm:pt-28 pt-28 pb-5">
              Our Files
            </h3>
            <hr className="w-1/4 border-t-4 border-blue-500 sm:mt-0 md:mt-2 mb-5 mx-auto" />
          </div>
    <div className="min-h-screen px-10">
      <div className="container mx-auto p-4 grid md:grid-cols-2 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            downloadLink={card.downloadLink}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Downloads;
