import React from 'react';
<<<<<<< HEAD
import MemImage from '../assets/profile-pic.png';
=======
import MemImage from '../assets/pfp.jpg';
>>>>>>> bb435e92a8bbe801751e9a59c69803398d1843aa
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Socials from './Socials';

const Team = () => {
  return (
    <section
      className="h-full items-center justify-around mx-auto md:px-6 md:py-8 lg:px-8 lg:py-12 mb-12 scroll-mt-[80px]"
      id="team"
    >
      <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-center">Team</h2>
      <h5 className=" -mt-2 font-medium text-md mb-4 md:text-lg lg:text-xl text-[#777777] text-center">
        Meet Our Wonderful Team Members
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 mx-auto gap-y-4 md:gap-y-6 mt-8 items-center ">
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Hafsa Shaikh</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Ayan Shaikh</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            Co-Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Zaid Mujahid</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
             Web Dev Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Yasier Ansari</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            Web Dev Co-Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Zafar Shaikh</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            Android Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Nabeel Mirza</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            Android Co-Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Arshad Shaikh</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            AI-ML Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Abdullah Bharde</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            AI-ML Co-Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Sania Shaikh</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            Creative Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
        <div className="max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
          <h4 className="text-xs md:text-sm lg:text-md font-medium">Hammad Momin</h4>
          <div className="container object-cover ">
            <img
              src={MemImage}
              alt="nabeel"
              className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
            />
          </div>
          <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
            Creative Co-Lead
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
            <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
            <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
          </div>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Team;
