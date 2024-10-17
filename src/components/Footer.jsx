import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-primary p-6">
            <div className="container mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between">

                {/* Company Info */}
                <div className="text-center md:text-left mb-4 md:mb-0 text-white">
                    <h2 className="text-2xl font-bold">Sysmatic Solution</h2>
                    <h3 className="text-lg font-bold">Phone: +91 98765 43210</h3>
                    <h3 className="text-lg font-bold">Email: contact@sysmaticsolutions.com</h3>
                    <h3 className="text-lg font-bold">Address: Tech Park, XYZ Avenue, Chennai, Tamil Nadu</h3>
                </div>

                {/* Services Section */}
                <div className="text-center md:text-left mb-4 md:mb-0 text-white md:pt-0 pt-10">
                    <h2 className="text-2xl font-bold">Services</h2>
                    <ul className="space-y-2">
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

                {/* Quick Links */}
                <div className="text-center md:text-left mb-4 md:mb-0 text-white md:pt-0 pt-10">
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/Services" className="hover:text-gray-300">Our Services</Link></li>
                        <li><Link to="/TrainingPlacement" className="hover:text-gray-300">Training & Placement</Link></li>
                        <li><Link to="/About" className="hover:text-gray-300">About Us</Link></li>
                        <li><Link to="/Contact" className="hover:text-gray-300">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            {/* Social Media and Copyright */}
            <div className="container mx-auto mt-4 flex flex-col md:flex-row justify-between items-center">
                <ul className="flex space-x-4 mb-2">
                    <li className="text-white hover:text-gray-400">FB</li>
                    <li className="text-white hover:text-gray-400">Twitter</li>
                    <li className="text-white hover:text-gray-400">Instagram</li>
                </ul>
                <p className="mt-2 text-gray-400 text-center md:text-right">
                    © 2024 Sysmatic Solution. All rights reserved.
                </p>
            </div>
        </footer>       
    );
};

export default Footer;
