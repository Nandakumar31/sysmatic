import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFirefoxBrowser } from 'react-icons/fa';
import contactpng from '../assets/BannerPng/Contact.png'


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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Form submitted:', formData);
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
    <div>
      <div className="container mx-auto text-center h-80  bg-slate-200 p-0 mt-10 mb-10 rounded-lg relative overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src={contactpng} alt="Contact" />
      </div>


      <div className="bg-gray-100 py-5">
        <div className="container mx-auto py-5">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full xl:w-1/2 px-2  mb-5 xl:mb-0 flex flex-col">
              <div className="bg-white rounded-lg p-6 mb-5 shadow-md flex-grow">
                <h4 className="text-primary font-bold mb-4">Get in Touch</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-4">
                      <FaMapMarkerAlt className="text-3xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p>123 Street New York, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-4">
                      <FaEnvelope className="text-3xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">Mail Us</h4>
                      <p>info@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-4">
                      <FaPhoneAlt className="text-3xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">Telephone</h4>
                      <p>(+012) 3456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-4">
                      <FaFirefoxBrowser className="text-3xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">Website</h4>
                      <p>Yoursite@ex.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-1/2 h-3/6 px-2 flex flex-col">
              <div className="bg-white rounded-lg p-6 shadow-md flex-grow">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0481488531584!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17f88d95f3%3A0x28f47448672db2c2!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1631682468491!5m2!1sen!2sin"
                  title="Google Map"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>



          <div className="bg-white  p-6 rounded-lg shadow-md">
            <h4 className="text-primary font-bold mb-4">Send Your Message</h4>
            {/* <p className="mb-4">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.{' '}
              <a
                href="https://htmlcodex.com/contact-form"
                className="text-blue-500 font-bold"
              >
                Download Now
              </a>
              .
            </p> */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Your Email"
                  />

                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Project"
                  />

                </div>
              </div>
              <div className="mb-4">
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
              </div>
              <div className="mb-4">
                <div className="form-floating">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input border border-gray-300 w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Leave a message here"
                    style={{ height: '160px' }}
                  />

                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
              </div>
              <button type="submit" className="btn btn-primary  py-2 px-4 bg-cyan-300
              font-bold rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact