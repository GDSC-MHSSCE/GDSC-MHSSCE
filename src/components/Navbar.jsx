import React from 'react';
import Logo from '../assets/left-align-logo.png';
import Logosm from '../assets/code-bracket.png';
import { useEffect, useState } from 'react';
import { FaBars, FaAlignCenter } from 'react-icons/fa';

const Navbar = () => {
  let Links = [
    { name: 'GDSC', link: '/' },
    { name: 'Community', link: '/' },
    { name: 'Team', link: '/' },
    { name: 'Event', link: '/' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  let [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        isScrolled &&
        'bg-[#c6e5ff] bg-opacity-50 backdrop-blur-sm  border-black border-b-1 rounded drop-shadow-lg '
      } shadow-md z-40 w-full fixed top-0 items-center justify-around justify-items-center`}
    >
      <div className="md:flex bg-white items-center justify-between py-3 md:px-10 px-7">
        <div
          className="h-8 sm:h-10 cursor-pointer flex items-center
      text-gray-800"
        >
          {/* <span className=" ml-1 px-2"> */}
          <img
            src={Logo}
            alt=""
            className=" hidden md:block h-8 items-start md:h-10 md:items-center mx-auto text-center"
          />
          <img
            src={Logosm}
            alt=""
            className=" h-5 sm:h-6 block md:hidden items-start mr-2 md:h-12 text-start"
          />
          {/* </span> */}
          <span className="block md:hidden text-lg font-bold">MHSSCE</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-lg absolute right-8 top-6 cursor-pointer  md:hidden"
        >
          {!open ? <FaBars name="open" /> : <FaAlignCenter name="menu" />}
          {/* <FaBars name={open ? 'close' : 'menu'} /> */}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-white md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-[3.5rem]' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-md font-semibold md:my-0 my-7">
              <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <button className="mx-auto md:ml-4 px-2 py-1 md:px-2 font-semibold bg-white md:text-white md:bg-blue text-dark-blue shadow-2xl border-inner border-2 rounded-lg  ">
            Contact Us
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
