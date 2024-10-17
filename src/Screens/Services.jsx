import React, { useEffect, useState } from 'react'
import '../../src/App.css';
import one from '../assets/Servicepng/one.png'
import two from '../assets/Servicepng/two.png'
import three from '../assets/Servicepng/three.png'
import four from '../assets/Servicepng/four.png'
import five from '../assets/Servicepng/five.png'
import six from '../assets/Servicepng/six.png'
import Service from '../assets/BannerPng/Service.png'
import { useNavigate } from 'react-router-dom';


const cardsData = [
    {
        image: four,
        title: 'Native App Development',
        description: 'Create powerful, intuitive, and sleek mobile apps with our native app development services, ensuring optimal performance and great user engagement.'
    },
    {
        image: six,
        title: 'Hybrid App Development',
        description: 'Create powerful, intuitive, and sleek mobile apps with our hybrid app development services, ensuring optimal performance and great user engagement.'
    },
    {
        image: five,
        title: 'Placement & Training',
        description: 'Invest in your future with our industry-aligned training programs and placement services designed to launch careers in the tech world, supported by corporate partners.',
    },
];
const cardsData1 = [
    {
        image: one,
        title: 'Data Analytics',
        description: 'Transform data into decisions. Our comprehensive analytics services help you predict trends, understand your market, and make data-driven decisions that foster growth and efficiency.',
    },
    {
        image: two,
        title: 'Digital Marketing',
        description: 'Transform data into decisions. Our comprehensive analytics services help you predict trends, understand your market, and make data-driven decisions that foster growth and efficiency.',
    },
    {
        image: three,
        title: 'Web Development',
        description: 'Build your online foundation with bespoke website designs that offer great functionality and user experience, crafted by our expert web developers to help you stand out in the digital crowd.',
    },
];
export default function Services() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Contact');
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
            <div className="container mx-auto text-center h-80  bg-slate-200 p-0 mt-10 mb-10 rounded-lg relative overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover" src={Service} alt="About" />
            </div>


            <div className="container mx-auto text-center mb-20 mt-20">
                <h2 className="text-4xl font-bold text-custom-blue mb-6">Our Services</h2>
                <p className="text-custom-word text-lg mt-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </p>


                <div className="flex service slide-up  flex-wrap justify-center ">
                    {cardsData1.map((item, i) => {
                        return (
                            <div key={i} className=" relative max-w-sm mx-10 mt-20 bg-slate-200 border border-gray-200 rounded-lg shadow overflow-hidden group">
                                <div className="relative z-10 p-5 bg-slate-200">
                                    <img className=" service-item service-img w-56 h-60 mx-auto my-10 mix-blend-multiply" src={item.image} alt={item.title} />
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom-blue">
                                        {item.title}
                                    </h5>
                                    <p className="mb-3 font-normal text-custom-word">{item.description}</p>
                                </div>
                                <div className="mb-10">
                                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700" onClick={handleClick}>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex service flex-wrap justify-center">
                    {cardsData.map((item, i) => {
                        return (

                            <div
                                key={i}
                                className={`relative max-w-sm mx-10 mt-20 bg-slate-200 border border-gray-200 rounded-lg shadow overflow-hidden group ${isVisible ? 'slide-up' : ''}`}
                            >
                                <div className="relative z-10 p-5 bg-slate-200">
                                    <img className="service-item service-img w-56 h-60 mx-auto my-10 mix-blend-multiply" src={item.image} alt={item.title} />
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom-blue">
                                        {item.title}
                                    </h5>
                                    <p className="mb-3 font-normal text-custom-word">{item.description}</p>
                                </div>
                                <div className="mb-10">
                                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
                                        Learn More
                                    </button>
                                </div>
                            </div>

                        )
                    })}
                </div>


            </div>
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
    )

}
