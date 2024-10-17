import React, { useEffect, useState } from 'react';
import TrainPng from '../assets/BannerPng/Training.png';
import one from '../assets/TrainingPng/one.png';
import two from '../assets/TrainingPng/two.png';
import three from '../assets/TrainingPng/three.png';
import four from '../assets/TrainingPng/four.png';
import { Link, useNavigate } from 'react-router-dom';

const cardsData = [
  {
    image: one,
    title: 'Native App Development',
    description: 'Create powerful, intuitive, and sleek mobile apps with our native app development services.',
  },
  {
    image: two,
    title: 'Hybrid App Development',
    description: 'Create powerful, intuitive, and sleek mobile apps with our hybrid app  development services.',
  },
  {
    image: three,
    title: 'Software Testing & Automation (Java)',
    description: 'Java and Selenium Automation Framework.',
  },
  {
    image: four,
    title: 'Software Testing & Automation (Python)',
    description: 'Python and Selenium Automation Framework.',
  },
];

function TrainingPlacement() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact');
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
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
    <div className="container mx-auto mt-32">
      <div className="relative h-80 bg-slate-200 mt-10 mb-10 rounded-lg overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src={TrainPng} alt="Training" />
      </div>
      <div className="text-center mb-20 mt-20 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-6">We Provide Best Offers</h2>
        <p className="text-custom-word text-lg mt-6">
          Invest in your future with our industry-aligned training programs and placement services designed to launch careers in the tech world.
        </p>

        <div className="container mx-auto px-4 md:px-56 mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsData.map((item, i) => (
            <div key={i} className="slide-up  relative md:mx-10 md:my-10 bg-slate-200 border border-gray-200 rounded-lg shadow overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="p-5 text-center">
                <div className="mx-auto">
                  <img className="w-full h-full mix-blend-multiply object-cover" src={item.image} alt={item.title} />
                </div>
                <h5 className="text-2xl font-bold text-custom-blue mt-4">{item.title}</h5>
                <p className="text-custom-word mt-3">{item.description}</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md w-full hover:bg-blue-700 mt-5" onClick={handleClick}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>



        <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-6 mt-20">Placement Offers</h2>
        <p className="text-custom-word text-lg mt-6 px-4 md:px-0">
          Our commitment to your success goes beyond basic training. We equip our students with skills based on real-world experiences, preparing them not just to enter the workforce but to excel in it.
        </p>

        <div className="flex flex-col mx-auto md:flex-row w-1/2 items-center border-dotted border-x-2 border-y-2
            rounded-lg mt-20 mb-10 justify-center">
          <p className="mb-0 font-bold w-full md:w-3/4 lg:w-2/4  text-center  mx-5 ">
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
    </div>
  );
}

export default TrainingPlacement;
