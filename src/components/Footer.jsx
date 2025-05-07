import React from "react";
const Footer = () => {
  return (
    <footer className=" text-white ">
      <div className="bg-[url(src/assets/images/Newsletter.png)] bg-cover bg-center text-center w-[1100px] h-[250px]  text-black ">
        <h2 className="text-4xl font-semibold ">
          Join Our <span className="text-[#00171F] font-bold">Newsletter</span>
        </h2>
        <p className="mt-5 text-sm text-[#00171F] max-w-lg mx-auto">
          Stay up to date with the latest deals, energy-saving tips, and
          exclusive offers! Sign up for our newsletter and never miss out on
          great savings opportunities again.
        </p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-bl-2xl border border-gray-300 focus:outline-none font-Helvetica"
          />
          <button className="bg-[#007BFF] text-white px-4 py-2 rounded-bl-xl cursor-pointer hover:bg-[#0056b3]">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-[url(src/assets/images/Footer.png)] bg-cover bg-center text-sm px-6 py-10 grid md:grid-cols-4 gap-8 text-gray-300 ">
        <div>
          <img src="src/assets/images/logo.png" alt="footer-logo"></img>
          <p className="mt-2 max-w-sm text-white">
            Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin
            pretium maecenas ornare lacus arcu adipiscing.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="ml-20">
          <h3 className="text-white font-bold mb-2">Quick Link</h3>
          <ul className="space-y-1">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Services</h3>
          <ul className="space-y-1">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Services</a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" text-center py-4 text-sm text-gray-400">
        © 2025 Bill Central. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
