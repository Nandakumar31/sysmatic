import React from 'react'


function TrainingPlacement() {
  const cardsData = [
    {
      image: 'https://via.placeholder.com/300',
      title: 'Native App Development',
      description: 'Create powerful, intuitive, and sleek mobile apps with our native app development services, ensuring optimal performance and great user engagement.'
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Hybrid App Development',
      description: 'Create powerful, intuitive, and sleek mobile apps with our hybrid app development services, ensuring optimal performance and great user engagement.'
    },

  ];
  return (
    <div>
      <div className="container mx-auto text-center h-80 border-4 bg-slate-200 p-10 mt-10 mb-10 rounded-lg"><h1>Image</h1></div>
      <div className="container mx-auto text-center mb-20 mt-20">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">We Provide Best Offers</h2>
        <p className="text-gray-700 text-lg mt-6">
          Invest in your future with our industry-aligned training programs and placement services designed to launch careers in the tech world,
          supported by our network of corporate partners
        </p>
        <div className="flex flex-wrap justify-center mt-20">
          {cardsData.map((item,i) => {
            return (
              <div key={i} className="relative max-w-sm mx-40 mb-10 bg-slate-200 border 
        border-gray-200 rounded-lg shadow overflow-hidden group">
                {/* <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-1/2 transition-transform duration-500"></div> */}

                <div className="relative z-10 p-5">
                  <img className="w-52 mx-auto my-10" src={item.image} alt={item.title} />
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">{item.description}</p>
                </div>
                <div className="mb-10">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center mt-20">
          {cardsData.map((item,i) => {
            return (
              <div key={i} className="relative max-w-sm mx-40 mb-10 bg-slate-200 border 
        border-gray-200 rounded-lg shadow overflow-hidden group">
                {/* <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-1/2 transition-transform duration-500"></div> */}

                <div className="relative z-10 p-5">
                  <img className="w-52 mx-auto my-10" src={item.image} alt={item.title} />
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">{item.description}</p>
                </div>
                <div className="mb-10">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Placement Offers</h2>
        <p className="text-gray-700 text-lg mt-6">
          At Sysmatic Solution, our commitment to your success goes beyond basic training.
          We equip our students with skills based on real-world experiences and industry demands, preparing them not just to enter the workforce but to excel in it. Our comprehensive training programs are designed with a focus on practical application and current trends, ensuring you are well-prepared for challenges in top management roles.
          Our goal is not only to launch your career but to accelerate it towards top-tier opportunities.
        </p>
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
    </div>
  )
}

export default TrainingPlacement