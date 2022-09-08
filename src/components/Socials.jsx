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
      <h6 className=" text-md mb-6 md:text-lg lg:text-xl font-medium -mt-2 text-[#777777] w-[80%] md:w-[60%]  lg:w-[50%] text-center leading-tight ">
        Contribute & More
      </h6>
      <div className="flex flex-col space-y-8 lg:space-y-0 md:max-w-lg lg:max-w-full lg:flex-row md:space-x-8 items-center justify-around">
        <div className="overflow-hidden px-2 md:px-0 rounded-lg justify-items-center basis-[40%] ">
          <ReactCompareSlider
            className="rounded-lg"
            itemOne={<ReactCompareSliderImage src={ContImage} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={Cont2Image} alt="Image two" />}
          />
        </div>
        <div className="lg:py-6 lg:px-4 flex flex-col basis-[60%] isolate relative  ">
          <div className="group z-10 w-max">
            <h5 className="text-[#777777]   font-extrabold text-sm md:text-sm mb-1 md:mb-0 ">
              <FiGithub className="w-6 h-6 lg:w-8 lg:h-8 scale-75 text-dark-red top-0 lg:top-3 rounded-lg py-1 px-1" />
            </h5>
            <h3 className="text-md sm:text-lg w-max md:text-xl  lg:text-2xl font-semibold tracking-tighter -mt-3 mb-4  hover:text-blue ">
              GDSC-MHSSCE/GDSC-MHSSCE-PORTAL{' '}
            </h3>
          </div>
          <p className="text-[0.8rem] sm:text-sm  md:text-md lg:text-base mb-12">
            Learn by actively participating in events, seminar and technical workshops to better
            understand the real world problems and experience community learning. For the student
            developer who wants to chime in and contribute, we have open sourced our website code
            just for you✌️. Don't forget to follow our social media links to get the latest info
            regarding any upcoming events.
          </p>
          <div className="flex space-x-8 md:space-x-10 lg:space-x-12 ">
            <a
              href="https://github.com/GDSC-MHSSCE/GDSC-MHSSCE"
              target="_blank"
              className="relative inline-block px-2 rounded-md py-2 items-center group"
              rel="noreferrer"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-red group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-red group-hover:bg-dark-red"></span>
              <span className=" relative flex flex-row space-x-1 font-medium  text-[0.7rem] md:text-sm lg:text-base group-hover:text-white items-center text-center  text-dark-red ">
                <BsLink className="mx-auto h-3 w-3 md:h-[1.3rem] md:w-[1.3rem] items-center " />
                <p>Contribute</p>
              </span>
            </a>
            <a
              href="#footer"
              className="relative inline-block px-2 rounded-md py-2 items-center group"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-yellow group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-yellow group-hover:bg-dark-yellow"></span>
              <span className=" relative flex flex-row space-x-1 font-medium text-[0.7rem] md:text-sm lg:text-base group-hover:text-white items-center text-center  text-dark-yellow ">
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
