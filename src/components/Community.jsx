import React from 'react';
import MhImage from '../assets/mhssc.png';
import { BsLink } from 'react-icons/bs';
const Community = () => {
  return (
    <div
      className="flex flex-col items-center px-2 py-4 mb-12 md:px-4 md:py-8 lg:px-6 lg:py-12 mt-4 lg:h-[90vh] scroll-mt-[80px] "
      id="community"
    >
      <h2 className="text-lg md:text-xl  lg:text-2xl font-semibold ">Community</h2>
      <h5 className=" text-md md:text-lg lg:text-xl font-medium text-[#777777] -mt-2  mb-8">
        Our Motto
      </h5>
      <div className="flex flex-col space-y-4 lg:space-y-0 md:max-w-lg lg:max-w-full lg:flex-row space-x-8 items-center justify-around">
        <div className=" overflow-hidden py-6 px-4 rounded-lg justify-items-center basis-[40%] ">
          <img
            src={MhImage}
            alt="mhssce "
            className="rounded-md hover:scale-150 duration-500 hover:backdrop-shadow-2xl "
          />
        </div>
        <div className="lg:py-6 lg:px-4 flex flex-col basis-[60%]  ">
          <div className="group">
            <h5 className="text-[#777777]  font-semibold text-xs md:text-sm mb-1 md:mb-0 ">GDSC</h5>
            <h3 className="text-lg md:text-xl  lg:text-2xl font-semibold -mt-3 mb-4 group-hover:text-blue ">
              M. H. Saboo Siddik College{' '}
            </h3>
          </div>
          <p className="text-xs sm:text-sm  md:text-md lg:text-lg mb-12">
            We, at GDSC MHSSCE aim to encourage student developers to have a greater{' '}
            <span class=" mx-1 hover:text-blue ">impact</span>
            on the community by <span class=" mx-1 hover:text-red ">igniting</span>a spark of
            knowledge towards learning various domain. We are firm believers of "Quality Knowledge",
            and thus we <span class=" mx-1 hover:text-dark-yellow ">inspire</span>
            our students to advance their skills to bring{' '}
            <span class=" mx-1 hover:text-dark-green ">innovative</span>
            ideas to build solution for real world problem.
          </p>
          <div className="flex space-x-2 sm:space-x-4 md:space-x-8  lg:space-x-12 ">
            {' '}
            <a
              href="https://gdsc.community.dev/mh-saboo-siddik-college-of-engineering-mumbai/"
              target="_blank"
              className="relative inline-block px-2 py-1 md:px-2 rounded-md md:py-2 items-center group"
              rel="noreferrer"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-blue group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-blue group-hover:bg-dark-blue"></span>
              <span className=" relative flex flex-row space-x-1 font-semibold text-[0.5rem] sm:text-xxs md:text-sm lg:text-base group-hover:text-white items-center text-center  text-[#115c9a] ">
                <BsLink className="mx-auto h-4 w-4 md:h-[1.3rem] md:w-[1.3rem] items-center " />
                <p>GDSC Chapter</p>
              </span>
            </a>
            <a
              href="https://www.mhssce.ac.in/"
              target="_blank"
              className="relative inline-block px-2 py-1 md:px-2 rounded-md md:py-2 items-center group"
              rel="noreferrer"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-green group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-green group-hover:bg-dark-green"></span>
              <span className=" relative flex flex-row space-x-1 font-semibold text-[0.5rem] sm:text-xxs md:text-sm lg:text-base group-hover:text-white items-center text-center  text-[#277b2a] ">
                <BsLink className="mx-auto h-4 w-4 md:h-[1.3rem] md:w-[1.3rem] items-center " />
                <p>College site</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
