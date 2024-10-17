import React from 'react'
import '../../src/App.css';
import Carousel1 from '../components/Carousel1';

export default function Services() {

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
        {
            image: 'https://via.placeholder.com/300',
            title: 'Placement & Training',
            description: 'Invest in your future with our industry-aligned training programs and placement services designed to launch careers in the tech world, supported by our network of corporate partners.',
        },
    ];
    const cardsData1 = [
        {
            image: 'https://via.placeholder.com/300',
            title: 'Data Analytics',
            description: 'Transform data into decisions. Our comprehensive analytics services help you predict trends, understand your market, and make data-driven decisions that foster growth and efficiency.',
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Digital Marketing',
            description: 'Transform data into decisions. Our comprehensive analytics services help you predict trends, understand your market, and make data-driven decisions that foster growth and efficiency.',
        },
        {
            image: 'https://via.placeholder.com/300',
            title: 'Web Development',
            description: 'Build your online foundation with bespoke website designs that offer great functionality and user experience, crafted by our expert web developers to help you stand out in the digital crowd.',
        },
    ];
    return (
        <div>
            <div className="container mx-auto text-center h-80 border-4 bg-slate-200 p-10 mt-10 mb-10 rounded-lg"><h1>Image</h1></div>
            <div className="container mx-auto text-center mb-20 mt-20">
                <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Services</h2>
                <p className="text-gray-700 text-lg mt-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </p>
                <Carousel1
                    items={cardsData1}
                    visibleItems={2}
                    renderItem={(item) => (
                        <div className="relative max-w-sm mx-auto mt-20 bg-slate-200 border  border-gray-200 rounded-lg shadow overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-1/2 transition-transform duration-500"></div>

                            <div className="relative z-10 p-5">
                                <img className="w-52 mx-auto my-10" src={item.image} alt={item.title} />
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {item.title}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700">{item.description}</p>
                            </div>
                            <div className=" mb-10">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                                    Learn More
                                </button>
                            </div>
                        </div>

                    )}
                    renderArrow={(direction) => (direction === 'prev' ? '<' : '>')}
                />
                <Carousel1
                    items={cardsData}
                    visibleItems={2}
                    renderItem={(item) => (
                        <div className="relative max-w-sm mx-auto mt-20 bg-slate-200 border  border-gray-200 rounded-lg shadow overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-1/2 transition-transform duration-500"></div>

                            <div className="relative z-10 p-5">
                                <img className="w-52 mx-auto my-10" src={item.image} alt={item.title} />
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {item.title}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700">{item.description}</p>
                            </div>
                            <div className=" mb-10">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                                    Learn More
                                </button>
                            </div>
                        </div>

                    )}
                    renderArrow={(direction) => (direction === 'prev' ? '<' : '>')}
                />
            </div>
        </div>
    )

}
