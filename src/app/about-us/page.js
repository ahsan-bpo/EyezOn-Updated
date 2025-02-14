import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import About from '../components/About/about';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import AboutUs from '../components/About/AboutU';
import ChooseUsU from '../components/ChooseUs/ChooseUsU';

const aboutPage = () => {
  return (
    <div>
        <div className="relative min-h-[60vh] bg-gradient-to-r from-purple-500 to-black bg-center bg-no-repeat bg-cover z-0">

        <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1
            className="text-white mt-32 text-5xl font-bold"
          >
            About Us
          </h1>

          <div
            className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow"
          >
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-purple-600" />
              About Us
            </div>
          </div>
        </div>
      </div>
      <AboutUs/>
      <ChooseUsU/>
    </div>
  )
}

export default aboutPage;
