import React from 'react';
import MhImage from '../assets/mhssc.png';
import { BsLink } from 'react-icons/bs';
const Community = () => {
  return (
    <div className="flex flex-col items-center px-2 py-4 mb-12 md:px-4 md:py-8 lg:px-6 lg:py-12 mt-4 lg:h-[90vh] ">
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
          <p className="text-sm  md:text-md lg:text-lg mb-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi exercitationem neque
            aspernatur magnam ipsam aliquid eligendi architecto corrupti accusantium aliquam ipsa,
            expedita odit consequuntur ratione non, accusamus, impedit magni molestiae?
          </p>
          <div className="flex space-x-4 md:space-x-8  lg:space-x-12 ">
            {/* <a href="https://www.mhssce.ac.in/">
                            <button className="flex w-max h-min items-center gap-x-2 rounded px-3 py-1.5 text-sm font-semibold transition hover:text-blue hover:bg-white hover:shadow-xl hover:border-[0.005rem] hover:border-blue bg-blue/80">
                                <BsLink className="h-5 w-5 md:h-7 md:w-7" />
                                GDSC Chapter
                            </button>
                        </a> */}
            <a href="/" className="relative inline-block px-2 rounded-md py-2 items-center group">
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-blue group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-blue group-hover:bg-dark-blue"></span>
              <span className=" relative flex flex-row space-x-1 font-semibold text-xxs md:text-sm lg:text-base group-hover:text-white items-center text-center  text-[#115c9a] ">
                <BsLink className="mx-auto h-4 w-4 md:h-[1.3rem] md:w-[1.3rem] items-center " />
                <p>GDSC Chapter</p>
              </span>
            </a>
            {/* <a href="https://www.mhssce.ac.in/">
                            <button className="flex w-max h-min items-center gap-x-2 rounded px-3 py-1.5 text-sm font-semibold transition hover:text-green hover:bg-white hover:shadow-xl hover:border-[0.005rem] hover:border-green bg-green">
                                <BsLink className="h-5 w-5 md:h-7 md:w-7" />
                                College site
                            </button>
                        </a> */}
            <a href="/" className="relative inline-block  px-2 rounded-md py-2 items-center group">
              <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-dark-green group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full rounded-lg bg-white border-2 border-light-green group-hover:bg-dark-green"></span>
              <span className=" relative flex flex-row space-x-1 font-semibold text-xxs md:text-sm lg:text-base group-hover:text-white items-center text-center  text-[#277b2a] ">
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
