import React, { useEffect, useState } from 'react'
import Data from '../assets/HomePng/Data.png'
import Mobile from '../assets/HomePng/Mobile.png'
import Web from '../assets/HomePng/Web.png'
import Digial from '../assets/HomePng/Digial.png'
import Tech from '../assets/HomePng/Tech.png'
import cs from '../assets/HomePng/cs.png'
import pro from '../assets/HomePng/pro.png'
import Trust from '../assets/HomePng/Trust.png'
import Carousel from '../components/Carousel'
import { useNavigate } from 'react-router-dom'
import '../App.css'

import main from '../assets/main.png'



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

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact');
  };
  const handleservice = () => {
    navigate('/Services');
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className='mt-32' >
   
      <div className="container mx-auto text-center   md:p-28 p-10 mt-10 mb-10 rounded-xl relative">
        <img src={main} className='absolute inset-0 w-full h-full object-cover opacity-100 rounded-2xl' alt="Background" />
        <div className="relative z-10 md:mt-20 mt-96">
          <h2 className="text-lg text-custom-blue font-bold md:text-2xl">Welcome to Sysmatic Solutions</h2>
          <h1 className="text-4xl font-bold text-custom-blue mt-4 md:text-5xl">
            Innovation At Work - Your Success, Our Mission
          </h1>
          <p className="text-custom-word text-lg mt-6 md:text-xl">
            Sysmatic Solutions is not just another IT service provider; we are innovators and problem-solvers committed to excellence.
            Our comprehensive services are designed to provide solutions that are not only effective but also future-proof, ensuring
            your business stays ahead of the curve.
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:justify-center">
            <button onClick={handleservice} className="bg-blue-600 text-white px-6 py-3 rounded-md md:mr-4 my-5 hover:bg-blue-700">
              Explore Now
            </button>
            <button onClick={handleClick} className="bg-white text-primary border-primary border px-6 py-3 
            rounded-md md:mr-4 my-5 hover:bg-blue-700 hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mb-20 mt-20">
        <h2 className="text-4xl font-bold text-custom-blue mb-6">Our Services</h2>
        <div className="  mt-10 md:mt-0">
          <p className="text-lg text-custom-word mb-10">
            Sysmatic Solutions is not just another IT service provider; we are innovators and problem-solvers committed to excellence. Our comprehensive services are designed to provide solutions that are not only effective but also future-proof, ensuring your business stays ahead of the curve.
          </p>
          <div className="mt-10 mb-10">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700" onClick={handleservice}>
              Explore More
            </button>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-center slide-up ${isVisible ? 'slide-up' : ''}`}>
          <div className='slide-up mb-10'>
            <img src={Data} alt="Data Analytics" />
          </div>
          <div className={`slide-up md:mt-60 ${isVisible ? 'slide-up' : ''}`}>
            <img src={Mobile} alt="Data Analytics" />
          </div>
          <div className='md:mt-60 md:ml-20 mt-10 slide-up'>
            <img src={Web} alt="Data Analytics" className="slide-up" />
          </div>
          <div className='mt-10 slide-up'>
            <img src={Digial} alt="Data Analytics" className="slide-up" />
          </div>
        </div>

      </div>


      <div className="container mx-auto text-center mb-20 mt-20">
        <h2 className="text-4xl font-bold text-custom-blue mb-6">Why Choose Us</h2>
        <p className="text-lg text-custom-word mb-10">
          Proud recipients of multiple industry awards for innovation and excellence in IT services,
          our achievements reflect our commitment to delivering exceptional results.
        </p>
        <Carousel
          items={items}
          visibleItems={2}
          renderItem={(item) => (
            <div className="relative max-w-sm w-full mx-auto bg-slate-200 border border-gray-200 rounded-lg shadow overflow-hidden group h-[500px]">
              {/* <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-1/2 transition-transform duration-500"></div> */}
              <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                <div className="relative">
                  <div className="absolute inset-0 bg-slate-200"></div>
                  <img className="w-52 mx-auto my-10  mix-blend-multiply" src={item.imageUrl} alt={item.title} />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom-blue">{item.title}</h5>
                {/* <div>
                  </div> */}
                <p className="mb-3 font-normal text-custom-word p-10">{item.description}</p>
              </div>
            </div>



          )}
          renderArrow={(direction) => (direction === 'prev' ? '<' : '>')}
        />

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


    </div >
  )
}

export default Home