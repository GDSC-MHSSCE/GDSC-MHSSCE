import React from 'react';
import Logo from '../assets/left-align-logo.png';
import { useEffect, useState } from 'react';
import { VscChromeClose, VscThreeBars } from 'react-icons/vsc';

const Navbar = () => {
  let Links = [
    { name: 'GDSC', link: '#gdsc' },
    { name: 'Community', link: '#community' },
    { name: 'Event', link: '#event' },
    { name: 'Team', link: '#team' },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  let [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
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
        isScrolled && 'shadow-xl border-black rounded drop-shadow-lg '
      } shadow-none z-40 w-full font-medium fixed top-0 items-center justify-around duration-700 transition-all ease-in justify-items-center`}
    >
      <div className="md:flex bg-white items-center place-items-center justify-between py-3 md:px-10 px-7">
        <div className="h-10 sm:h-12 cursor-pointer flex items-center text-gray-800">
          {/* <span className=" ml-1 px-2"> */}
          <a href="#hero" className="flex">
            <img
              src={Logo}
              alt=""
              className=" h-[1.8rem] md:h-[2.15rem] lg:h-[2.4rem] items-center mx-auto text-center"
            />
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-lg absolute right-8 top-6 cursor-pointer items-center  font-bold md:hidden"
        >
          {!open ? (
            <VscThreeBars name="open" className="h-5 w-5" />
          ) : (
            <VscChromeClose name="menu" className="stroke-1 h-5 w-5" />
          )}
          {/* <FaBars name={open ? 'close' : 'menu'} /> */}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-white md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-[3.5rem]' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base font-regular md:my-0 my-7">
              <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <a href="#socials">
            <button className="mx-auto md:ml-4 px-2 py-1 md:px-2 font-medium bg-white md:text-white md:bg-blue text-dark-blue shadow-2xl border-inner border-2 rounded-lg  ">
              Socials
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
