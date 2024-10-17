import React from 'react'
import one from  '../assets/AboutPng/one.png'
import two from  '../assets/AboutPng/two.png'
export default function About() {
    return (
        <div>
            <div className="container mx-auto text-center h-80 border-4 bg-slate-200 p-10 mt-10 mb-10 rounded-lg"><h1>Image</h1></div>
            <div className="mt-20 mb-40">
        {/* First Section */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center space-y-8 md:space-y-0">
            {/* Image Section */}
            <div className="md:w-1/2 p-4 flex justify-center">
              <img
                src={one}
                alt="Placeholder"
                className="w-3/4 md:w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/3 p-4 md:ml-10 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Who We are</h2>
              <p className="text-gray-700">
                Sysmatic Solution is not just another IT service provider; we are innovators and problem-solvers
                committed to excellence. Our comprehensive services are designed to provide solutions that are
                not only effective but also future-proof, ensuring your business stays ahead of the curve.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Text Section */}
            <div className="md:w-1/3 p-4 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-700">
                Our team consists of industry experts who are not only skilled in technology but are also passionate about making a difference.
                We believe in a collaborative approach, fostering an environment that encourages creative solution
              </p>
            </div>

            {/* Image Section */}
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
        </div>
    )
}
