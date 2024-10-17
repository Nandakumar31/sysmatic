<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoNew.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa';


function Footer() {

    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <footer className="bg-custom-footcolor p-6">
            <div className="container mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between">


                <div className="text-center md:text-left mb-4 md:mb-0 space-y-5 text-white">
                    <div className="text-white text-2xl font-bold">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <h3 className="text-lg font-bold ">Phone: +91 98765 43210</h3>
                    <h3 className="text-lg font-bold">Email: contact@sysmaticsolutions.com</h3>
                    <h3 className="text-lg font-bold">Address: Tech Park, XYZ Avenue, Chennai, Tamil Nadu</h3>
                </div>


                <div className="text-center md:text-left mb-4 md:mb-0 text-white md:pt-0 pt-10">
                    <h2 className="text-2xl font-bold">Services</h2>
                    <ul className="space-y-5 mt-5">
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Digital Analytics</Link>
                        </li>
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Digital Marketing</Link>
                        </li>
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Web Development</Link>
                        </li>
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Mobile App Development</Link>
                        </li>
                    </ul>
                </div>


                <div className="text-center md:text-left mb-4 md:mb-0 text-white md:pt-0 pt-10">
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <ul className="space-y-5 mt-5">
                        <li>
                            <Link to="/" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Services" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/TrainingPlacement" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Training & Placement
                            </Link>
                        </li>
                        <li>
                            <Link to="/About" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="container mx-auto mt-4 flex flex-col md:flex-row justify-between items-center">
                <ul className="flex space-x-2 mb-2 p-2 rounded-md">
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaSnapchat style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                </ul>
                <p className="mt-2 text-gray-400 text-center md:text-right">
                    © 2024 Sysmatic Solution. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
=======
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoNew.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa';


function Footer() {

    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <footer className="bg-custom-footcolor p-6">
            <div className="container mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between">


                <div className="text-center md:text-left mb-4 md:mb-0 space-y-5 text-white">
                    <div className="text-white text-2xl font-bold">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <h3 className="text-lg font-bold ">Phone: +91 98765 43210</h3>
                    <h3 className="text-lg font-bold">Email: contact@sysmaticsolutions.com</h3>
                    <h3 className="text-lg font-bold">Address: Tech Park, XYZ Avenue, Chennai, Tamil Nadu</h3>
                </div>


                <div className="text-center md:text-left mb-4 md:mb-0 text-white md:pt-0 pt-10">
                    <h2 className="text-2xl font-bold">Services</h2>
                    <ul className="space-y-5 mt-5">
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Digital Analytics</Link>
                        </li>
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Digital Marketing</Link>
                        </li>
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Web Development</Link>
                        </li>
                        <li>
                            <Link to="#home" className="hover:text-gray-300">Mobile App Development</Link>
                        </li>
                    </ul>
                </div>


                <div className="text-center md:text-left mb-4 md:mb-0 text-white md:pt-0 pt-10">
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <ul className="space-y-5 mt-5">
                        <li>
                            <Link to="/" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Services" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/TrainingPlacement" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Training & Placement
                            </Link>
                        </li>
                        <li>
                            <Link to="/About" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="hover:text-gray-300" onClick={() => window.scrollTo(0, 0)}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="container mx-auto mt-4 flex flex-col md:flex-row justify-between items-center">
                <ul className="flex space-x-2 mb-2 p-2 rounded-md">
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FaSnapchat style={{ fontSize: '40px', margin: '10px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                        </Link>
                    </li>
                </ul>
                <p className="mt-2 text-gray-400 text-center md:text-right">
                    © 2024 Sysmatic Solution. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
>>>>>>> bc10b2e43c35a9f46b7b6372e526e75bfbf8d47c
