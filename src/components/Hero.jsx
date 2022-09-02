import React from 'react';
import HeroImage from '../assets/hero-section.png';
import { BsArrowDown, BsFillPersonPlusFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="h-full lg:h-[80vh] mt-20 md:mt-16 lg:mb-20">
      <section className="flex flex-col md:flex-row justify-around items-center mb-16 md:py-12 lg:py-2 ">
        <div className="basis-[40%] flex flex-col  text-center mx-auto md:text-start md:mx-0 gap-y-0 items-start order-2 py-8 px-12 md:px-0 md:order-1">
          <div className="text-3xl text-start  md:px-0 md:mx-0 md:text-4xl lg:text-6xl xl:text-6xl mb-0 font-medium">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: '',
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span style="color: #42A5F5;">Connect.</span>')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('<span style="color: #FFCA28;">Learn.</span>')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('<span style="color:#EF5350;">Build.</span>')
                  .pauseFor(500)
                  .deleteAll()
                  .typeString('<span style="color: #66BB6A;">Grow.</span>')
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className="text-start flex flex-col space-y-0 md:space-y-2 -mt-4 lg:-mt-8 border-transparent transition ease-in-out">
            <p className="text-xl md:mx-0 md:text-xl lg:text-3xl font-semibold">
              Be a part of GDSC MHSS
            </p>
            <p className=" text-md md:text-md  lg:text-lg font-regular text-start md:text-start mb-4">
              Explore new paths and get acquainted with the knowledge that really matters
            </p>
            <p className="pt-6  md:mx-0 text-xs md:text-sm lg:text-lg text-start">
              Become a
              <a
                href="/"
                className="relative inline-block px-2 rounded-md py-1 ml-3   font-medium group"
              >
                <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-blue group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-blue group-hover:bg-blue"></span>
                <span className="relative flex group-hover:text-white  text-[#115c9a] ">
                  Member
                  <BsFillPersonPlusFill className="mx-2 h-[1.3rem] w-[1.3rem] " />
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex-initial max-w-sm md:max-w-full md:basis-[50%] hover:scale-105 duration-500 order-1 md:order-2">
          <img
            src={HeroImage}
            alt="hero"
            className="h-60 md:h-[17rem] lg:h-[28rem] mx-auto text-center "
          />
        </div>
      </section>
      <div className="hidden md:block -m-8 items-center w-[30vh] mx-auto text-center animate-bounce mb-24">
        <a className="" href="#gdsc">
          <BsArrowDown className="mx-auto h-8 w-8 " />
        </a>
      </div>
    </div>
  );
};

export default Hero;