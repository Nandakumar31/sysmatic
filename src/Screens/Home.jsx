import React from 'react'

import DA from '../assets/HomePng/DA.png'
import MDA from '../assets/HomePng/MAD.png'
import DM from '../assets/HomePng/DM.png'
import WBD from '../assets/HomePng/WBD.png'

import Tech from '../assets/HomePng/Tech.png'
import cs from '../assets/HomePng/cs.png'
import pro from '../assets/HomePng/pro.png'
import Trust from '../assets/HomePng/Trust.png'
import Carousel from '../components/Carousel'



function Home() {


  const items = [
    {
      id: 1, title: 'Tech Expertise',
      description: 'Leverage our deep tech knowledge across various domains to your advantage.',
      imageUrl: Tech
    },
    {
      id: 2, title: 'Customized Solutions',
      description: 'Tailored strategies that align perfectly with your business needs.',
      imageUrl: cs
    },
    {
      id: 3, title: 'Proactive Innovation',
      description: 'We stay ahead of the curve, so your business can, too',
      imageUrl: pro
    },
    {
      id: 4, title: 'Trust Worthly Partnership',
      description: 'Transparency and collaboration are the pillars of our client relationships.',
      imageUrl: Trust
    },
  ];
  return (
    <div >
      <div className="container mx-auto text-center border-4 bg-slate-200 p-10 mt-10 mb-10 rounded-lg">
        <h2 className="text-lg text-blue-600 font-bold">Welcome to Sysmatic Solutions</h2>
        <h1 className="text-4xl font-bold text-blue-800 mt-4">
          Innovation At Work - Your Success, Our Mission
        </h1>
        <p className="text-gray-700 text-lg mt-6">
          Sysmatic Solutions is not just another IT service provider; we are innovators and problem-solvers committed to excellence.
          Our comprehensive services are designed to provide solutions that are not only effective but also future-proof, ensuring
          your business stays ahead of the curve.
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md mr-4 hover:bg-blue-700">
            Explore Now
          </button>
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white">
            Contact Us
          </button>
        </div>
      </div>
      <div className="container mx-auto text-center mb-20 mt-20">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Services</h2>
        <div className="  mt-10 md:mt-0">
          <p className="text-lg text-gray-700 mb-10">
            Sysmatic Solutions is not just another IT service provider; we are innovators and problem-solvers committed to excellence. Our comprehensive services are designed to provide solutions that are not only effective but also future-proof, ensuring your business stays ahead of the curve.
          </p>
          <div className="mt-10 mb-10">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
              Explore More
            </button>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between'>
          <div className="group w-full md:w-1/5 mb-10 px-4 bg-slate-200 py-8 rounded-lg relative overflow-hidden transition-transform transform hover:translate-x-2 hover:bg-blue-100 duration-300">
            <img src={DA} alt="Data Analytics" className="mx-auto" />
            <h3 className="text-xl font-bold text-blue-800 my-6">Data Analytics</h3>
          </div>

          <div className="group w-full md:w-1/5 mt-20 mb-10 px-4   bg-slate-200 py-8 rounded-lg relative overflow-hidden transition-transform transform hover:translate-x-2 hover:bg-blue-100 duration-300">
            <img src={DM} alt="Data Analytics" className="mx-auto" />
            <h3 className="text-xl font-bold text-blue-800 my-6">Digital Marketing</h3>
          </div>


          <div className="group w-full md:w-1/5  mt-20 mb-10 px-4 md:mx-4  bg-slate-200 py-8 rounded-lg relative overflow-hidden transition-transform transform hover:translate-x-2 hover:bg-blue-100 duration-300">
            <h3 className="text-xl font-bold text-blue-800 my-6">Mobile App Development</h3>
            <img src={MDA} alt="Mobile App Development" className="mx-auto mix-blend-multiply" />
          </div>

          <div className="group w-full md:w-1/5 mb-10 px-4 md:mx-4  bg-slate-200 py-8 rounded-lg relative overflow-hidden transition-transform transform hover:translate-x-2 hover:bg-blue-100 duration-300">
            <h3 className="text-xl font-bold text-blue-800 my-6">Web Development</h3>
            <img src={WBD} alt="Web Development" className="mx-auto" />
          </div>
        </div>

      </div>


      <div className="container mx-auto text-center mb-20 mt-20">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Why Choose Us</h2>
        <p className="text-lg text-gray-700 mb-10">
          Proud recipients of multiple industry awards for innovation and excellence in IT services,
          our achievements reflect our commitment to delivering exceptional results.
        </p>
        <Carousel
          items={items}
          visibleItems={2}
          renderItem={(item) => (
            <div className="relative max-w-sm mx-auto bg-slate-200 border  border-gray-200 rounded-lg shadow overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-1/2 transition-transform duration-500"></div>

              <div className="relative z-10 p-5">
                <img className="w-52 mx-auto my-10" src={item.imageUrl} alt={item.title} />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">{item.description}</p>
              </div>
            </div>

          )}
          renderArrow={(direction) => (direction === 'prev' ? '<' : '>')}
        />

        <div className="flex flex-col md:flex-row w-full items-center mt-20 justify-center">
          <p className="mb-0 w-full md:w-3/4 lg:w-2/4 p-5 rounded-xl text-center border mx-5 mt-10">
            "Innovation at Work - Your Success, Our Mission."
          </p>
          <a
            href="/"
            className="inline-flex mt-10 md:ml-5 items-center px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Us
          </a>
        </div>
      </div>


    </div >
  )
}

export default Home