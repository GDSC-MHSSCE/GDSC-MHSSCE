import React from 'react';
import { AiOutlineTeam, AiOutlineCode, AiOutlineTool } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import GdscImage from '../assets/about-gdsc.png';

const Gdsc = () => {
  return (
    <section id="gdsc" className=" lg:h-[90vh] scroll-mt-[80px] mb-8 md:mb-20 items-center">
      <h3 className="text-lg md:text-xl  font-semibold lg:text-2xl text-center">Why GDSC ?</h3>
      <h5 className="-mt-2 font-medium text-md md:text-lg lg:text-xl text-[#777777] text-center ">
        Whats so good about it ?
      </h5>
      <div className="mx-auto border-box flex flex-col lg:flex-row  justify-around items-center gap-x-4 mt-6">
        <div className="max-w-xs md:max-w-sm lg:max-w-md md:basis-[45%] self-center ">
          <img
            src={GdscImage}
            className="mx-auto hover:scale-110 duration-500 transition-all "
            alt="GDSC-ABOUT"
          />
        </div>
        <div className="basis-[55%] grid md:grid-cols-2 gap-y-1 gap-x-2 ">
          <div className="flex flex-col border-[0.075rem] group border-hidden hover:!border-opacity-100 hover:border-blue hover:rounded-md hover:shadow-blue hover:shadow-md px-4  py-4">
            <div className="basis-4/10 text-start text-dark-blue md:text-black text-md md:text-lg lg:text-xl font-medium self-start flex justify-center items-center group-hover:text-blue ">
              <AiOutlineTeam className=" w-4 md:w-5 h-4 md:h-4 lg:w-[1.3rem] lg:h-[1.3rem] mr-3" />
              Connect
            </div>
            <div className="max-w-xs basis-6/10">
              <p className=" self-start px-1 py-1 text-[0.8rem] md:text-sm lg:text-md text-start mx-auto ">
                There is nothing better than meeting people that truly understand you. GDSC-MHSSCE
                is all about meeting those like-minded people and working on same interest.{' '}
              </p>
            </div>
          </div>
          <div className="flex flex-col border-[0.075rem] group border-hidden hover:!border-opacity-100 hover:border-yellow hover:rounded-md hover:shadow-yellow hover:shadow-md px-4  py-4">
            <div className="basis-4/10 text-md md:text-lg lg:text-xl text-dark-yellow md:text-black font-medium text-start self-start flex justify-center items-center group-hover:text-yellow ">
              <AiOutlineCode className=" w-4 md:w-5 h-4 md:h-4 lg:w-[1.3rem] lg:h-[1.3rem] mr-3" />{' '}
              Learn
            </div>
            <div className="max-w-xs basis-6/10">
              <p className=" text-[0.8rem] md:text-sm lg:text-md px-1 py-1 self-start  text-start mx-auto ">
                Learn the Skill you've always wanted to acquire. Never compromise, always have the
                best and experienced peers and mentors to learn from.{' '}
              </p>
            </div>
          </div>
          <div className="flex flex-col border-[0.075rem] group border-hidden hover:!border-opacity-100 hover:border-red hover:rounded-md hover:shadow-red hover:shadow-md px-4  py-4">
            <div className="basis-4/10 text-md md:text-lg lg:text-xl text-dark-red md:text-black font-medium text-start self-start flex justify-center items-center group-hover:text-red ">
              <AiOutlineTool className=" w-4 md:w-5 h-4 md:h-4 lg:w-[1.3rem] lg:h-[1.3rem] mr-3" />{' '}
              Build
            </div>
            <div className="max-w-xs basis-6/10">
              <p className=" text-[0.8rem] md:text-sm lg:text-md px-1 py-1 self-start  text-start mx-auto ">
                Build things that will have an impact on thousand of lives. Team up with one of the
                brightest minds to make life easier, simple, beautiful and cheerful to live.{' '}
              </p>
            </div>
          </div>
          <div className="flex flex-col border-[0.075rem] group border-hidden hover:!border-opacity-100 hover:border-green hover:rounded-md hover:shadow-green hover:shadow-md px-4  py-4">
            <div className="basis-4/10 text-md md:text-lg lg:text-xl text-dark-green md:text-black font-medium text-start self-start flex justify-center items-center group-hover:text-green ">
              <BsGraphUp className=" w-4 md:w-5 h-4 md:h-4 lg:w-[1.3rem] lg:h-[1.3rem] mr-3" /> Grow
            </div>
            <div className="max-w-xs basis-6/10">
              <p className=" text-[0.8rem] md:text-sm lg:text-md py-1 px-1 self-start  text-start mx-auto ">
                GDSC-MHSSCE has it all. Never stop growing with an amazing community, having
                experienced mentor in different field of interest.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gdsc;
