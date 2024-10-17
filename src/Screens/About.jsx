import React from 'react'
import one from '../assets/AboutPng/one.png'
import two from '../assets/AboutPng/two.png'
import Aboutpng from '../assets/BannerPng/About.png'
export default function About() {
  return (
    <div className='mt-32' >
      <div className="container mx-auto text-center h-80  bg-slate-200 p-0 mt-10 mb-10 rounded-lg relative overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src={Aboutpng} alt="About" />
      </div>
      <div className="mt-20 mb-40">

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center space-y-8 md:space-y-0">

            <div className="md:w-1/2 p-4 flex justify-center">
              <img
                src={one}
                alt="Placeholder"
                className="w-3/4 md:w-full rounded-lg shadow-lg"
              />
            </div>


            <div className="md:w-1/2 p-10 text-center ">
              <h2 className="text-5xl text-custom-blue font-bold mb-4">Who We are</h2>
              <p className="text-custom-word text-2xl">
                Sysmatic Solution is not just another IT service provider; we are innovators and problem-solvers
                committed to excellence. Our comprehensive services are designed to provide solutions that are
                not only effective but also future-proof, ensuring your business stays ahead of the curve.
              </p>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

            <div className="md:w-1/2 p-4 text-center ">
              <h2 className="text-5xl  text-custom-blue font-bold mb-4">Our Team</h2>
              <p className="text-custom-word text-2xl">
                Our team consists of industry experts who are not only skilled in technology but are also passionate about making a difference.
                We believe in a collaborative approach, fostering an environment that encourages creative solution
              </p>
            </div>


            <div className="md:w-1/2 p-4 flex justify-center">
              <img
                src={two}
                alt="Placeholder"
                className="w-3/4 md:w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-20 mt-20 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-6 mt-20">Our Services</h2>
        <p className="text-custom-word text-lg md:w-1/2 mx-auto">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters   </p>
      </div>
      <div className="flex flex-col mx-auto md:flex-row w-1/2 items-center border-dotted border-x-2 border-y-2
            rounded-lg mt-20 mb-10 justify-center">
        <p className="mb-0 w-full font-bold md:w-3/4 lg:w-2/4  text-center  mx-5 ">
          "Innovation at Work - Your Success, Our Mission."
        </p>
        <a
          href="/Contact"
          className="inline-flex md:my-5 md:ml-5 items-center my-10 px-5 py-3 text-sm font-medium text-center text-white bg-custom-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}
