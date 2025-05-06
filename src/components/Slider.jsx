import React from "react";
const Energy = () => {
  return (
    <section className=" py-12 px-6 md:px-16">
      <div className="text-center mb-10 mr-10">
        <h2 className="text-4xl font-semibold text-blue-950 font-helvetica">
          More than <span className="text-sky-500">80,000+</span> companies{" "}
          <br /> trust bill central
        </h2>
        <div className="flex justify-center items-center space-x-5 gap-30 mt-6 ">
          <img
            src="src/assets/images/energy.png"
            alt="1st Energy"
            className="h-6"
          />
          <img
            src="src/assets/images/blue.png"
            alt="Blue NRG"
            className="h-6"
          />
          <img src="src/assets/images/dodo.png" alt="Dodo" className="h-6" />
          <img
            src="src/assets/images/origin.png"
            alt="Origin"
            className="h-6"
          />
          <img src="src/assets/images/vo.png" alt="Powershop" className="h-6" />
          <img src="src/assets/images/sumo.png" alt="Sumo" className="h-6" />
          <img src="src/assets/images/agl.png " alt="AGL" className="h-6" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center  rounded-2xl p-8 ">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="src/assets/images/group.png"
            alt="Happy customer"
            className="rounded-xl"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-10">
          <h3 className="text-3xl font-bold mb-4">
            Switching Energy
            <br /> <span className="font-semibold">Made Simple</span>
          </h3>
          <p className="text-blue-950 mb-7">
            Say goodbye to confusing energy plans! We simplify the process by
            providing clear and competitive electricity and gas recommendations.
            Whether you're moving or just seeking a better deal, our platform
            connects you with the best energy providers quickly and easily,
            helping you save on energy bills.
          </p>
          <div className="mb-4 text-blue-950">
            <p> Benefits of Comparing Energy Plans</p>
          </div>
          <ul className="list-disc list-inside text-blue-950 mb-6">
            <li>Save money by finding cheaper deals.</li>
            <li>Get better customer service.</li>
            <li>Explore greener, more sustainable energy options.</li>
          </ul>
          <button className="bg-sky-500 text-white px-4 py-2 rounded-3xl font-semibold text-sm cursor-pointer hover:bg-blue-600">
          Compare With Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Energy;
