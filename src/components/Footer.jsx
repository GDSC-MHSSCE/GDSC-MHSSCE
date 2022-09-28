import React from 'react';
import Logo from '../assets/center-align-logo.png';
import { AiFillYoutube, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
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
          <div className="flex basis-1/2 md:basis-1/3">
            <img src={Logo} className="" alt="logo" />
          </div>
          <div className=" basis-[75%] text-center mx-auto">
            <p className="mb-2 text-xs sm:text-sm md:text-md">
              MH Saboo Siddik Polytechnic Rd, Police Colony, Nagpada, Byculla, Mumbai, Maharashtra
              400008
            </p>
            <a
              href="mailto: gdsc.mhssce@gmail.com"
              target="_blank"
              className="text-xs sm:text-sm md:text-md font-medium"
              rel="noreferrer"
            >
              Gmail: gdsc.mhssce@gmail.com
            </a>
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
                <a href="#event" className="hover:text-blue">
                  {' '}
                  Event{' '}
                </a>{' '}
              </p>
              <p className="">
                <a href="#team" className="hover:text-blue">
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
                <a href="#gdsc" className="hover:text-blue">
                  {' '}
                  Chapter{' '}
                </a>{' '}
              </p>
              <p className="">
                <a
                  href="https://github.com/GDSC-MHSSCE/GDSC-MHSSCE"
                  target="_blank"
                  className="hover:text-blue"
                  rel="noreferrer"
                >
                  {' '}
                  Contribute{' '}
                </a>{' '}
              </p>
              <p className="">
                <a
                  href="https://gdsc.community.dev/mh-saboo-siddik-college-of-engineering-mumbai/"
                  target="_blank"
                  className="hover:text-blue"
                  rel="noreferrer"
                >
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
              <a
                href="https://www.youtube.com/channel/UClh19sNenpUBsGF6lurrFpw"
                target="_blank"
                className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white "
                rel="noreferrer"
              >
                <AiFillYoutube className="w-5 h-5 md:w-6 md:h-6 " />
              </a>

              <a
                href="https://twitter.com/GDSC_MHSSCE"
                target="_blank"
                className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white "
                rel="noreferrer"
              >
                <AiOutlineTwitter className="w-5 h-5 md:w-6 md:h-6 " />
              </a>

              <a
                href="https://www.linkedin.com/company/gdsc-mhssce"
                target="_blank"
                className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white "
                rel="noreferrer"
              >
                <GrLinkedinOption className="w-5 h-5 md:w-6 md:h-6 " />
              </a>

              <a
                href="https://www.instagram.com/gdsc.mhssce/"
                target="_blank"
                className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white "
                rel="noreferrer"
              >
                <AiFillInstagram className="w-5 h-5 md:w-6 md:h-6 " />
              </a>

              <a
                href="https://www.facebook.com/GDSC-Mhssce-103151425863628/"
                target="_blank"
                className="hover:text-dark-blue mx-auto bg-[#333] py-1 px-1 text-white rounded-md hover:bg-white "
                rel="noreferrer"
              >
                <FaFacebookF className="w-5 h-5 md:w-6 md:h-6 " />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[10%] text-xxs md:text-xs -space-y-2 mt-6 lg:mt-0 md:text-end flex flex-col mx-auto text-center font-base justify-center pb-1 px-16 ">
        <a
          href="https://github.com/GDSC-MHSSCE/GDSC-MHSSCE"
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
