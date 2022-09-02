import React from 'react';
import Logo from '../assets/center-align-logo.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full text-sm flex flex-col shadow-xl basis-[90%] bg-[#dbdbdb] px-4 sm:px-5 md:px-6 lg:px-8 "
    >
      <div className="flex flex-col lg:flex-row space-x-8 py-8 ">
        <div className="basis-[25%] flex lg:flex-col space-x-4 lg:space-x-0 space-y-0 mx-auto items-center mb-12 lg:mb-12 ">
          <div className="flex">
            <img src={Logo} alt="h-16 md:h-20" />
          </div>
          <div className=" basis-[100%] text-center mx-auto">
            <p className="mb-2 text-xs sm:text-sm md:text-md text-start">
              MH Saboo Siddik Polytechnic Rd, Police Colony, Nagpada, Byculla, Mumbai, Maharashtra
              400008
            </p>
            <h5 className="text-start text-xs sm:text-sm md:text-md font-medium">
              gmail:mhssce@staff.ac.in
            </h5>
          </div>
        </div>
        <div className=" block items-center w-3/4 lg:hidden h-[0.065rem] mb-6 bg-[#777777] mx-auto self-center"></div>
        <div className="h-inherit flex-grow w-[1px]  bg-[#777777] mx-auto"> </div>
        <div className=" basis-[100%] md:basis-[80%] flex mx-auto items-center justify-around ">
          <div className="basis-[36%] hidden  md:block ">
            <h5 className="font-medium mb-4">Page Section</h5>
            <div className="text-start space-y-4 -mt-2 ">
              <p className="">
                <a href="/" className="hover:text-blue">
                  {' '}
                  GDSC{' '}
                </a>{' '}
              </p>
              <p className="">
                <a href="/" className="hover:text-blue">
                  {' '}
                  Event{' '}
                </a>{' '}
              </p>
              <p className="">
                <a href="/" className="hover:text-blue">
                  {' '}
                  Team{' '}
                </a>{' '}
              </p>
            </div>
          </div>
          <div className="basis-[36%]">
            <h5 className="font-medium text-xs sm:text-sm md:text-base mb-4">GDSC Section</h5>
            <div className="text-start text-xs sm:text-sm lg:text-md space-y-2 md:space-y-4 -mt-2 ">
              <p className="">
                <a href="/" className="hover:text-blue">
                  {' '}
                  Chapter{' '}
                </a>{' '}
              </p>
              <p className="">
                <a href="/" className="hover:text-blue">
                  {' '}
                  Contribute{' '}
                </a>{' '}
              </p>
              <p className="">
                <a href="/" className="hover:text-blue">
                  {' '}
                  Member{' '}
                </a>{' '}
              </p>
            </div>
          </div>
          <div className="basis-[28%] flex flex-col">
            <p className="max-w-[16rem] hidden md:block lg:max-w-[15rem] text-sm mx-auto font-medium text-start md:text-sm">
              Follow Us{' '}
            </p>
            <div className="space-x-3 flex mt-4 flex-row  items-center justify-center mx-auto justify-items-center ">
              <p className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white ">
                <GrLinkedinOption className="sm:w-4 sm:h-4 md:w-6 md:h-6 " />
              </p>
              <p className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white ">
                <AiOutlineInstagram className="sm:w-4 sm:h-4 md:w-6 md:h-6 " />
              </p>
              <p className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white ">
                <FaFacebookF className="sm:w-4 sm:h-4 md:w-6 md:h-6 " />
              </p>
              <p className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white ">
                <FiTwitter className="sm:w-4 sm:h-4 md:w-6 md:h-6 " />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex-grow text-[#777777] mx-auto ">
                <hr />
            </div> */}
      <div className="basis-[10%] text-xxs md:text-xs -space-y-2 mt-6 lg:mt-0 md:text-end flex flex-col mx-auto text-center font-base justify-center pb-1 px-16 ">
        {/* <div>
          Made with 💗 by{' '}
          <a
            href="https://github.com/yasier-ansari/ "
            className="hover:text-base hover:text-medium group-hover:text-[#ff00dd] group-hover:-mt-2 "
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Noru
          </a>{' '}
        </div> */}
        <a
          href="https://github.com/yasier-ansari/GDSC-MHSSCE"
          target="_blank"
          className="text-center"
          rel="noreferrer"
        >
          &copy; Apache-2.0 || GDSC MHSSCE
        </a>
      </div>
    </footer>
  );
};

export default Footer;
