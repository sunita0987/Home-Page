import React from "react";
const Hero = () => {
  return (
    <div className="min-h-screen bg-[url(./assets/images/bg.png)] bg-cover bg-center text-white">
      <nav className="flex items-center justify-between px-6 py-4">
        <img
          src="src/assets/images/logo.png"
          alt="logo"
          className="ml-10"
        ></img>
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:underline hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:underline hover:text-blue-600">
            How It Works
          </a>
          <a href="#" className="hover:underline hover:text-blue-600">
            Services
          </a>
          <a href="#" className="hover:underline hover:text-blue-600">
            Testimonials
          </a>
          <a href="#" className="hover:underline hover:text-blue-600">
            Why Us
          </a>
          <a href="#" className="hover:underline hover:text-blue-600">
            FAQ
          </a>
        </div>
        <button className="bg-white text-[#00171F] px-4 py-2 rounded-bl-xl  rounded-br-sm font-bold text-sm cursor-pointer hover:bg-blue-200">
          Get Started →
        </button>
      </nav>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-normal mb-4">
            Easily Compare <br />
            <span className="text-white  font-bold">
              Energy, Gas, And <br /> Internet
            </span>{" "}
            <span className="font-normal"> Plans</span>
          </h1>
          <p className="text-lg text-gray-100 mb-6 font-helvetica">
            Find and switch to the best energy, gas, and internet plans with
            ease. Our platform simplifies your search, letting you compare
            providers and make informed decisions, all in one place.
          </p>
          <div className="bg-white rounded-full p-1 flex items-center w-full max-w-md shadow-lg font-helvetica">
            <input
              type="text"
              placeholder="Start typing your address"
              className="flex-grow px-4 py-2 text-black rounded-bl-2xl focus:outline-none font-helvetica"
            />
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-2 rounded-bl-2xl rounded-br-2xl text-sm">
              Compare →
            </button>
          </div>
        </div>
        {/* <div className="mb-1">
          <img
            src="src/assets/images/heroimage.png"
            alt="Woman researching utilities"
            className="rounded-xl"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
