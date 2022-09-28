import React from 'react';
import EventImage from '../assets/in.jpg';
import EventImage2 from '../assets/inaug.jpg';

const Event = () => {
  return (
    <section className="h-full items-center mb-12 scroll-mt-[80px]" id="event">
      <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-center ">Events</h2>
      <h5 className="-mt-2 font-medium text-md mb-4 md:text-lg lg:text-xl text-[#777777] text-center ">
        Upcoming Event
      </h5>
      <div className="flex flex-col md:flex-row  justify-between mx-auto items-center  py-2 sm:px-2 md:py-4 md:px-8 lg:py-6 lg:px-12">
        <div className="w-80 max-w-[18rem] drop-shadow-lg sm:max-w-[20rem] md:max-w-full order-1 md:order-2 flex flex-col justify-end shadow-md h-max rounded-lg overflow-hidden mx-auto mb-6 md:mb-0 text-start ">
          <div className="basis-[70%]">
            <img src={EventImage} alt="Event" className="object-cover" />
          </div>
          <div className="basis-[30%] bg-[#ffe5e7] px-4 py-4 lg:px-6 flex flex-col space-y-3 ">

            <div className="flex justify-between space-x-6 items-center ">
              <h3 className="font-semibold text-sm sm:text-md">Inauguration session</h3>
              <p className="bg-green px-3 text-xxs md:text-xs text-white rounded-full ">Offline</p>
            </div>
            <div className="text-start font-medium text-[0.65rem] md:text-sm pt-4 pb-2">
              We Invite all of the Department of MH Saboo siddik, HODs and clubs to join the
              inauguration of GDSC-MHSSCE and experience the start of an amazing journey with our
              team.
            </div>
            <span className="text-xxs md:text-xs text-center hover:underline  hover:underline-offset-4 hover:decoration-dark-green hover:decoration-2">
              {' '}
              Seminar Hall
            </span>
          </div>
        </div>
        <div className="w-80 max-w-[18rem] sm:max-w-[20rem] md:max-w-full order-1 md:order-2 flex flex-col justify-end shadow-md h-max rounded-lg overflow-hidden mx-auto mb-6 md:mb-0 text-start ">
          <div className="basis-[40%]">
            <img src={EventImage2} alt="Event" className="" />
          </div>
          <div className="basis-[60%] bg-[#ffe5e7] px-4 py-4 lg:px-6 flex flex-col space-y-3">
            <div className="flex justify-between space-x-6 items-center ">
              <h3 className="font-semibold text-sm sm:text-md">Info session</h3>
              <p className="bg-blue px-3 text-xxs md:text-xs text-white rounded-full ">Online</p>
            </div>
            <div className="text-start font-medium text-[0.65rem] md:text-sm pt-4 pb-2">
              Join our info session to know more about our year roadmap and all the information
              about the forthcoming educational and fun events,seminars and workshop
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkYiHnA_jbOv-s-DL-pjYLpkhfMOa5AysZmsZSbY7kJ73Z4w/viewform"
              target="_blank"
              className="text-xxs font-medium animate-bounce w-max mx-auto px-2 py-1 rounded-lg text-white bg-dark-blue md:text-xs text-center hover:underline hover:underline-offset-4 hover:decoration-dark-blue hover:decoration-2"
              rel="noreferrer"
            >
              {' '}
              Register Here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
