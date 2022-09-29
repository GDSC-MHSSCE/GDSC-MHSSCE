import React, { useRef, useState } from 'react';
import MemImage from '../assets/pfp.jpg';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail, AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Socials from './Socials';

const Team = () => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="h-full items-center justify-around mx-auto md:px-6 md:py-8 lg:px-8 lg:py-12 mb-12 scroll-mt-[80px]"
      id="team"
    >
      <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-center">Team</h2>
      <h5 className=" -mt-2 font-medium text-md mb-4 md:text-lg lg:text-xl text-[#777777] text-center">
        Meet Our Wonderful Team Members
      </h5>
      <div className="flex space-x-8 items-center justify-items-center mx-auto">
        <div
          className="bg-white shadow-md hover:shadow-dark-blue shadow-light-blue drop-shadow-xl group p-2 h-max w-max rounded-full items-center hover:scale-125"
          onClick={() => handleClick('left')}
        >
          <AiFillCaretLeft
            className={`mx-auto cursor-pointer fill-blue group-hover:fill-dark-blue transition `}
          />
        </div>

        <div
          className="flex snap-x class-1 pb-4 class-2 class-3 class-4 slider snap-mandatory items-center scroll-smooth overflow-x-scroll space-x-10 sm:space-x-16 md:space-x-28 lg:space-x-[4.5rem]"
          ref={rowRef}
        >
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-xs md:text-sm lg:text-md font-medium">Hafsa Shaikh</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="hafsa shaikh"
                className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
              />
            </div>
            <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">Lead</p>
            <div className="flex space-x-4 md:space-x-6">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-xs md:text-sm lg:text-md font-medium">Ayan Shaikh</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="ayan shaikh"
                className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
              />
            </div>
            <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">Co-Lead</p>
            <div className="flex space-x-4 md:space-x-6">
              <a href="http://linkedin.com/in/ayansk11/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue " />
              </a>

              <a href="http://github.com/ayansk11" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a href="mailto:name@ayansk152@gmail.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red" />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-xs md:text-sm lg:text-md font-medium">Zaid Mujahid</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="zaid mujahid"
                className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
              />
            </div>
            <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
              Web Lead
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <a
                href="http://linkedin.com/in/zaid-mujahid-0923a0221/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://github.com/ZaidMujahid" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a
                href="mailto:name@zaidmujahid274@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-xs md:text-sm lg:text-md font-medium">Yasier Ansari</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="yasier ansari"
                className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
              />
            </div>
            <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
              Web Co-Lead
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <a
                href="http://linkedin.com/in/yasier-ansari-711076222"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="https:github.com/yasier-ansari" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a
                href="mailto:name@contact.yasier@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
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
              <a
                href="http://linkedin.com/in/zafar-shaikh-068402241"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://github.com/Zafar7645" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a
                href="mailto:name@zafarshaikh645@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
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
              <a href="http://" target="_blank" rel="noopener noreferrer">
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-xs md:text-sm lg:text-md font-medium">Arshad Shaikh</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="arshad shaikh"
                className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
              />
            </div>
            <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
              AI-ML Lead
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <a
                href="http://linkedin.com/in/arshad-shaikh1107"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://github.com/Sarshad070121" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a
                href="mailto:name@shaikharshad0121@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-[10px] md:text-sm lg:text-md font-medium">Abdullah Bharde</h4>
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
              <a
                href="http://linkedin.com/in/abdullah-bharde-955ba6222"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://github.com/Abdul-16" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a
                href="mailto:name@abdul16bharde@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-[10px] md:text-sm lg:text-md font-medium">Maryam Ansari</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="maryam ansari"
                className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
              />
            </div>
            <p className="font-regular text-[0.55rem] sm:text-xxs md:text-sm lg:text-md">
              DS Lead
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-[10px] md:text-sm lg:text-md font-medium">Renita Fernandes</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="renita fernandes"
                className="rounded-full border-4  w-16 mx-auto sm:w-28 md:w-32 lg:max-w-full border-t-red border-b-blue border-l-green border-r-yellow"
              />
            </div>
            <p className="font-regular text-[0.5rem] sm:text-[0.56rem] md:text-[0.84rem] lg:text-[0.85rem]">
              DS Co-lead
            </p>
            <div className="flex space-x-4 md:space-x-6 -py-4">
              <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
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
              <a
                href="http://linkedin.com/in/sania-shaikh-0731001a0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a
                href="mailto:name@Saniashaikh0304@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-[10px] md:text-sm lg:text-md font-medium">Hammad Momin</h4>
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
              <a
                href="http://linkedin.com/in/hammadmomin-"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-dark-blue  " />
              </a>
              <a href="http://github.com/HammadMomin" target="_blank" rel="noopener noreferrer">
                <FiGithub className="  w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md px-1 py-1 text-black hover:bg-white hover:text-black " />
              </a>
              <a
                href="mailto:name@mohdhammad.momin@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 px-1 py-1 rounded-md text-black hover:bg-white hover:text-red  " />
              </a>
            </div>
          </div>
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-[10px] md:text-sm lg:text-md font-medium">Daniya Mirkar</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="daniya mirkar"
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
          <div className=" snap-start scroll-px-8 max-w-[8rem]  sm:max-w-[18rem]  md:max-w-sm lg:max-w-md flex flex-col space-y-2 sm:space-y-3 md:space-y-4 rounded-lg bg-[#cce8ff] py-4 px-4 md:py-4 md:px-6 items-center mx-auto ">
            <h4 className="text-[10px] md:text-sm lg:text-md font-medium">Rahul Shinde</h4>
            <div className="container object-cover ">
              <img
                src={MemImage}
                alt="rahul shinde"
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
        <div
          className="bg-white shadow-md hover:shadow-dark-blue shadow-light-blue drop-shadow-xl group p-2 h-max w-max rounded-full items-center hover:scale-125"
          onClick={() => handleClick('right')}
        >
          <AiFillCaretRight
            className={`mx-auto cursor-pointer fill-blue group-hover:fill-dark-blue transition `}
          />
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Team;
