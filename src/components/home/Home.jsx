import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faGraduationCap,
  faTicketAlt,
  faCarCrash,
  faVideo,
  faTachometerAlt,
  faFileLines
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
const cards = [
  {
    title: "Driving Theory",
    description:
      "You get to learn the ultimate driving theory which helps you become a better and safer driver.",
    icon: faTachometerAlt,
  },
  {
    title: "License Support",
    description:
      "We will help you achieve your driving license, making you fully confident for your upcoming Written/Trial examination.",
    icon: faTicketAlt,
  },
  {
    title: "Road Safety",
    description:
      "Safety comes first, always! You will be conducted all kinds of safety measures that you need to inherit.",
    icon: faCarCrash,
  },
  {
    title: "Written/Trial Mock Test",
    description:
      "We provide you with a demo examination environment for your driving license that can help you to be familiar with governmental examination.",
    icon: faGraduationCap,
  },
  {
    title: "Visual Clip",
    description:
      "We provide you with guideline videos prepared by us for training purposes that help you be familiar with us and achieve knowledge at home too and focus more on Practical.",
    icon: faVideo,
  },
  {
    title: "Test Drive",
    description:
      "We make certain test driving for everybody who wants to join the Triveni Driving Centre in order to maintain transparency.",
    icon: faCar,
  },
];
const links = [
  {
    title: "Online Form",
    img: '/icon1.png',
    links: "https://applydl.dotm.gov.np/"
  },
  {
    title: "License Print Status",
    img: '/icon2.png',
    links: 'https://www.dotm.gov.np/DrivingLicense/SearchLicense'
  },
  {
    title: "DOTM Website",
    img: '/icon3.png',
    links: 'https://www.dotm.gov.np/'
  },
  {
    title: "Online Vehicles Registration",
    img: '/icon3.png',
    links: 'https://onlineevrsreg.dotm.gov.np/Nepal_VRSREG/home'
  },
  
];

const Home = () => {
  return (
    <>
        <div className="relative h-screen bg-gray-800">
          <img
            src="/img1.jpg"
            alt="Motors Home"
            className="absolute inset-0 w-full h-screen object-cover opacity-50"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-12 sm:pt-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={twMerge(
                clsx(
                  "sm:text-4xl md:text-6xl sm:pt-0 pt-4 font-bold text-white mb-4"
                )
              )}
            >
              NEW SWARGADWARY DRIVING CENTER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={twMerge(
                clsx("text-base md:text-2xl mx-28 text-white mb-0 pb-10")
              )}
            >
              Drive Your Future, Start Today!
            </motion.p>
          </div>
        </div>
      <div className="content py-20 px-4 sm:px-8 md:px-16 lg:px-28">
      <div className='lg:w-2/3 space-y-5 text-center mx-auto mb-12'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>Why Choose Us</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
        </div>
        
        <div className="text-lg sm:mx-auto md:mx-36 md:flex">
          <p className="text-justify text-gray-800 mr-20 md:w-2/3">
            Road safety is a key concern area for both the Government and the
            people on Nepal roads. Safe driving today requires a higher level of
            confidence and competence, given the poor traffic planning,
            increasing number of vehicles, and lack of professionalism in
            driving and untrained drivers on road. In a bid to address these
            issues, NEW SWARGADWARY MOTOR DRIVING SCHOOL has launched Driving
            School its initiative for promoting safe driving.
            <br />
            <br />
            The school was the first to introduce advanced driving training
            simulator for better judgment and concept of route maps for holistic
            on-road practice. Our trained and highly competent driving
            instructors and staff at NEW SWARGADWARY MOTOR DRIVING SCHOOL in
            Tulsipur, Dang are here to help you on your journey towards learning
            how to drive, passing your road test and subsequently obtaining your
            driver license.
          </p>
          <img src="./img2.jpg" className="pt-2 h-auto w-full md:w-7/12 rounded-sm" />
        </div>
      </div>
      <section className="max-w-screen-xl mx-auto px-4">
      <div className='lg:w-2/3 space-y-5 text-center mx-auto mb-12'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>DRIVING LICENSE PROCESS</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
        </div>
      </section>
      <div className="licenseprocess bg-slate-300">
              <VerticalTimeline lineColor="#fff">
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background:'#000',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faFileLines}/>}
                >             
                  <h2 className="font-bold uppercase">Online Form</h2>
                  <p>You must apply online to get new driving license, renew and new category. There is only limited quota so sometimes it might not get approved. If you are having problem with online form then you can hire agent that can help you.</p>
                  
                  {/* <h5 className="font-bold">Related Links</h5>
                  <ul className="list-disc ml-6">
                    <li className="hover:text-blue-500 cursor-pointer">Online Form Registration</li>
                    <li className="hover:text-blue-500 cursor-pointer">Registration Process</li>
                  </ul> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background:'#000',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faFileLines}/>}
                >             
                  <h2 className="font-bold uppercase">Document Submission</h2>
                  <p>All document should be submitted on appointment 
                    date. Online registered data is verified and medical test is 
                    taken (Color Blindness). Form payment should be done on the same day.
                  </p>
                  
                  {/* <h5 className="font-bold">Related Links</h5>
                  <ul className="list-disc ml-6">
                    <li className="hover:text-blue-500 cursor-pointer">Test Your Color Vision</li>
                    <li className="hover:text-blue-500 cursor-pointer">Required Medical Reports</li>
                  </ul> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background:'#000',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faFileLines}/>}
                >             
                  <h2 className="font-bold uppercase">Exam (Likhit)</h2>
                  <p>
                    20 objective questions in which atleast 2 will be traffic sign. 
                    Result will be published on the same day through SMS service, facebook page and website.
                  </p>
                  
                  {/* <h5 className="font-bold">Related Links</h5>
                  <ul className="list-disc ml-6">
                    <li className="hover:text-blue-500 cursor-pointer">Test Your Color Vision</li>
                    <li className="hover:text-blue-500 cursor-pointer">Required Medical Reports</li>
                  </ul> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background:'#000',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faFileLines}/>}
                >             
                  <h2 className="font-bold uppercase">Trial</h2>
                  <p>
                  You must strictly follow all the traffic rules while giving trial. You will get 3 chance to pass your
                  trial and there should atleast 10 days gap from each trial incase if you failed. You can get trial
                  tips and best tutorial video from our site.
                  </p>
                  
                  {/* <h5 className="font-bold">Related Links</h5>
                  <ul className="list-disc ml-6">
                    <li className="hover:text-blue-500 cursor-pointer">Trial Tutorial & Tips</li>
                  </ul> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background:'#000',color:'#fff'}}
                icon={<FontAwesomeIcon icon={faFileLines}/>}
                >             
                  <h2 className="font-bold uppercase">Payment & License</h2>
                  <p>
                  Once you have passed trial, final payment should be made after 10 days and you can legally drive with that payment slip until you get your license. Payment slip should
                  be submitted to get smart license so keep it same. Distribution of smart license is very slow. And you can check printed status through SMS service only.
                  </p>
                  
                  {/* <h5 className="font-bold">Related Links</h5>
                  <ul className="list-disc ml-6">
                    <li className="hover:text-blue-500 cursor-pointer">Check License Print Status</li>
                  </ul> */}
                </VerticalTimelineElement>
              </VerticalTimeline>
      </div>
      <div>
        <div className='lg:w-2/3 space-y-5 pt-20 text-center mx-auto mb-12'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>FEATURES AND SERVICES</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
        </div>
        <div className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-28 grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-black text-white text-center bg-opacity-70 rounded-lg shadow-lg overflow-hidden p-6"
            >
              <FontAwesomeIcon icon={card.icon} className="text-6xl mb-4" />
              <div className="p-4">
                <h3 className="text-xl text-white font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
      <div className='lg:w-2/3 space-y-5 pt-20 text-center mx-auto mb-12'>
            <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>Important Links</h1>
            <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
        </div>
        <div className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-28 grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-blue-800 text-white text-center rounded-lg shadow-lg overflow-hidden p-6"
            >
              <div class="flex items-center justify-center">
                <img src={link.img} className="w-25 h-25 rounded-full object-cover" alt="" />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-white font-bold mb-5">
                  {link.title}
                </h3>
                <a href={link.links} className="bg-blue-500 text-white font-bold py-2 px-8 my-4 rounded hover:bg-blue-700">
                  Clink Here
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

