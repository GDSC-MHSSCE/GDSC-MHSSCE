import React from 'react';
import { BsLink } from 'react-icons/bs';
import ContImage from '../assets/contribute.jpg';
import Cont2Image from '../assets/contribute2.jpg';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { FiGithub } from 'react-icons/fi';

const Socials = () => {
  return (
    <div className="flex flex-col items-center md:px-6 py-12 mt-12 scroll-mt-[80px] " id="socials">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center ">Socials </h2>
      <h6 className=" text-md md:text-lg lg:text-xl font-medium -mt-2 text-[#777777] w-[80%] md:w-[60%]  lg:w-[50%] text-center leading-tight ">
        Contribute & More
      </h6>
      <div className="flex flex-col space-y-8 lg:space-y-0 md:max-w-lg lg:max-w-full lg:flex-row space-x-8 items-center justify-around">
        <div className="hidden md:block overflow-hidden rounded-lg justify-items-center basis-[40%] ">
          {/* <img
                        src={ContImage}
                        alt="mhssce "
                        className="rounded-md hover:scale-150 duration-500 hover:backdrop-shadow-2xl "
                    /> */}
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={ContImage} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={Cont2Image} alt="Image two" />}
          />
        </div>
        <div className="block md:hidden overflow-hidden rounded-lg justify-items-center basis-[40%] ">
          <img
            src={ContImage}
            alt="mhssce "
            className="rounded-md hover:scale-125 duration-500 hover:backdrop-shadow-2xl "
          />
        </div>
        <div className="lg:py-6 lg:px-4 flex flex-col basis-[60%] isolate relative  ">
          <div className="group z-10 ">
            <h5 className="text-[#777777]   font-extrabold text-sm md:text-sm mb-1 md:mb-0 ">
              <FiGithub className=" w-6 h-6 lg:w-8 lg:h-8  -z-0 text-white  group-hover:rotate-0 group-hover:scale-75 lg:group-hover:-left-4 lg:group-hover:top-4 md:group-hover:-top-8  group-hover:-z-50 group-hover:bg-white group-hover:text-dark-red duration-1000 transition-all rotate-[30deg]  absolute animate-pulse md:-top-2  md:animate-none top-0 lg:top-3 bg-[#777] rounded-lg py-1 px-1 " />
            </h5>
            <h3 className="text-md sm:text-lg md:text-xl  lg:text-2xl font-semibold tracking-tighter -mt-3 mb-4 group-hover:text-blue group-hover:bg- ">
              yasier-ansari/GDSC-MHSSCE-PORTAL{' '}
            </h3>
          </div>
          <p className="text-xs sm:text-sm  md:text-md lg:text-base mb-12">
            Learn by actively participating in events, seminar and technical workshop to better
            understand the real world problems and experience community learning.For the student
            developer who wants to chime in and contribute, we have open sourced our website code
            just for you✌️. Don't forget to follow our social media links to get the latest info
            regarding any upcoming events.
          </p>
          <div className="flex space-x-6 md:space-x-8 lg:space-x-12 ">
            <a
              href="https://github.com/yasier-ansari/GDSC-MHSSCE"
              target="_blank"
              className="relative inline-block px-2 rounded-md py-2 items-center group"
              rel="noreferrer"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-red group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-red group-hover:bg-dark-red"></span>
              <span className=" relative flex flex-row space-x-1 font-medium  text-xxs md:text-sm lg:text-base group-hover:text-white items-center text-center  text-dark-red ">
                <BsLink className="mx-auto h-4 w-4 md:h-[1.3rem] md:w-[1.3rem] items-center " />
                <p>Contribute</p>
              </span>
            </a>
            <a
              href="#footer"
              className="relative inline-block px-2 rounded-md py-2 items-center group"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-yellow group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-yellow group-hover:bg-dark-yellow"></span>
              <span className=" relative flex flex-row space-x-1 font-medium text-xxs md:text-sm lg:text-base group-hover:text-white items-center text-center  text-dark-yellow ">
                <BsLink className="mx-auto h-4 w-4 md:h-[1.3rem] md:w-[1.3rem] items-center " />
                <p>Social Link</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
