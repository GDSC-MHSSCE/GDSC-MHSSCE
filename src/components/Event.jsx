import React from 'react';
import EventImage from '../assets/post.jpg';

const Event = () => {
  return (
    <section className="h-full items-center mb-12 scroll-mt-[80px]" id="event">
      <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-center ">Events</h2>
      <h5 className="-mt-2 font-medium text-md mb-4 md:text-lg lg:text-xl text-[#777777] text-center ">
        Upcoming Event
      </h5>

      <div className="flex flex-col md:flex-row justify-end mx-auto items-center py-2 sm:px-2 md:py-4 md:px-8 lg:py-6 lg:px-12">
        {/* <div className="w-80 max-w-[18rem] sm:max-w-[20rem] md:max-w-full order-1 md:order-2 flex flex-col justify-end shadow-md h-max rounded-lg overflow-hidden mx-auto mb-6 md:mb-0 text-start ">
          <div className="basis-[40%] h-64 ">
            <img src={EventImage} alt="Event" className="object-fill" />
          </div>
          <div className="basis-[60%] bg-[#ffe5e7] px-4 md:px-1 py-4 lg:px-6 flex flex-col space-y-3">
            <div className="flex justify-between space-x-6 items-center ">
              <h3 className="font-semibold text-sm sm:text-md">Inauguration session</h3>
              <p className="bg-green px-3 text-xxs md:text-xs text-white rounded-full ">Offline</p>
            </div>
            <div className="text-start text-xxs sm:text-xs font-medium">
              <p> &gt; 28th September, 2022</p>
              <p> &gt; 1:00 pm - 3:00pm</p>
            </div>
            <div className="text-start font-medium text-[0.65rem] md:text-sm pt-4 pb-2">
              We Invite all the Tech enthusiast to join the inauguration of GDSC-MHSSCE and
              experience the start of an amazing journey with our team.
            </div>
            <span className="text-xxs md:text-xs text-center hover:underline  hover:underline-offset-4 hover:decoration-dark-green hover:decoration-2">
              {' '}
              Main Event Hall
            </span>
          </div>
        </div>
        <div className="w-80 max-w-[18rem] sm:max-w-[20rem] md:max-w-full order-1 md:order-2 flex flex-col justify-end shadow-md h-max rounded-lg overflow-hidden mx-auto mb-6 md:mb-0 text-start ">
          <div className="basis-[40%]">
            <img src={EventImage} alt="Event" className="" />
          </div>
          <div className="basis-[60%] bg-[#ffe5e7] px-4 md:px-1 py-4 lg:px-6 flex flex-col space-y-3">
            <div className="flex justify-between space-x-6 items-center ">
              <h3 className="font-semibold text-sm sm:text-md">Info session</h3>
              <p className="bg-blue px-3 text-xxs md:text-xs text-white rounded-full ">Online</p>
            </div>
            <div className="text-start text-xxs sm:text-xs font-medium">
              <p> &gt; 28th September, 2022</p>
              <p> &gt; 1:00 pm - 3:00pm</p>
            </div>
            <div className="text-start font-medium text-[0.65rem] md:text-sm pt-4 pb-2">
              We Invite all the Tech enthusiast to join the inauguration of GDSC-MHSSCE and
              experience the start of an amazing journey with our team.
            </div>
            <span className="text-xxs md:text-xs text-center hover:underline hover:underline-offset-4 hover:decoration-dark-blue hover:decoration-2">
              {' '}
              https://gmeet.com/3djp-hf/join
            </span>
          </div>
        </div> */}
        <div className="mx-auto items-center animate-pulse">
          <h2 className="mt-30 font-semibold text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">
            Coming Soon
          </h2>
          <h5 className="font-medium text-md mb-4 md:text-1xl lg:text-3xl text-[#777777] text-center">
            Stay Tuned!
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Event;
