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
      title: 'Bike or Scouter',
      subtitle: 'Question Simple',
      image: examImage,
      downloadLink: docInNepali,
    },
    {
      title: 'Jepp or Car',
      subtitle: 'Question Simple',
      image: examImage,
      downloadLink: docInEnglish,
    },
  ];

  return (
    
      <div className="relative min-h-screen max-w-full">
        
        <div className='relative h-[300px] overflow-hidden bg-slate-800 md:p-5'>
          <div className='absolute inset-0'>
            <img src="/img2.jpg" alt="" className='h-[300px] w-full object-cover opacity-70' />
          </div>
          <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 text-center md:px-2'>
            <h1 className='mt-20 text-5xl font-semibold uppercase leading-tight text-white md:text-6xl'>Downloads</h1>
          </div>
        </div>
        <div className='lg:w-2/3 space-y-5 text-center mx-auto mt-20 mb-12'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>View and Downloads</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
            <p className='text-gray-600 dark:text-gray-300 text-base leading-6'>Download the necessary files from the list below!!!</p>
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
