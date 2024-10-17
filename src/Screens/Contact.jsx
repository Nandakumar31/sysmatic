import React, {  useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa';
import contactpng from '../assets/BannerPng/Contact.png'
import chat from '../assets/Contactpng/chat.png'
import phone from '../assets/Contactpng/phone.png'
import location from '../assets/Contactpng/location.png'
import { Link } from 'react-router-dom';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone is required.';
    if (!formData.subject) newErrors.subject = 'Subject is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide popup after 3 seconds
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Form submitted:', formData);
      handleClick()
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }
  };

 



  return (
    <div className='mt-32' >
      <div className="container mx-auto text-center h-80  bg-slate-200 p-0 mt-10 mb-10 rounded-lg relative overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src={contactpng} alt="Contact" />
      </div>


      <div className="bg-white-100 ">
        <div className="container mx-auto ">
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='w-full lg:w-1/2 p-5 my-5 border bg-white rounded-xl'>
              <h2 className="text-2xl text-custom-blue font-semibold">Get In Touch</h2>

              <div className="flex flex-col sm:flex-row space-y-4 p-5 sm:space-x-4 sm:space-y-0 mt-5">
                <img className="mix-blend-multiply w-12 h-12" src={chat} alt="chat" />
                <div>
                  <h5 className="font-bold text-custom-blue">Mail Details</h5>
                  <h5>contact@sysmaticsolutions.com</h5>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 p-5 sm:space-x-4 sm:space-y-0 mt-5">
                <img className="mix-blend-multiply w-12 h-12" src={phone} alt="phone" />
                <div>
                  <h5 className="font-bold text-custom-blue">Contact Details</h5>
                  <h5>Phone: +91 9876 543 210</h5>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 p-5 sm:space-x-4 sm:space-y-0 mt-5">
                <img className="mix-blend-multiply w-12 h-12" src={location} alt="place" />
                <div>
                  <h5 className="font-bold text-custom-blue">Location</h5>
                  <h5>Address: Tech Park, XYZ Avenue, Chennai, Tamil Nadu.</h5>
                </div>
              </div>

              <div className="container mx-auto mt-4 flex flex-col md:flex-row justify-between items-center">
                <ul className="flex space-x-2 mb-2 p-2 mx-5 rounded-md">
                  <li>
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                      <FaFacebook style={{ fontSize: '50px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram style={{ fontSize: '50px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin style={{ fontSize: '50px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                      <FaSnapchat style={{ fontSize: '50px', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full lg:w-1/2 p-5 my-5 md:mx-5 border bg-white rounded-xl'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312043.89925357266!2d80.16224522627102!3d13.082702802670058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526129b42a38a3%3A0x1d40fbb35d85aa3c!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1630347625410!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>


          <div className="bg-white  p-6 rounded-lg shadow-md">
            <h4 className="text-primary font-bold mb-4">Contact Form Details</h4>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 mx-5'>
                <div className='md:w-1/2 space-y-10'>
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  <div className="form-floating">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Your Phone"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>

                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Your Email"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>

                <div className='md:w-1/2 space-y-10 md:mx-5'>
                  <div className="form-floating">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="Subject"
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                  </div>

                  <div className="form-floating">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Leave a message here"
                      style={{ height: '130px' }}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>

                  <button type="submit"  className="btn w-full py-4 px-10 mt-5 text-white bg-blue-600 font-bold rounded-md hover:bg-blue-700 transition duration-200">
                    Send Message
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="absolute mt-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          Team Will Contact You soon...!
        </div>
      )}
    </div>
  )
}

export default Contact