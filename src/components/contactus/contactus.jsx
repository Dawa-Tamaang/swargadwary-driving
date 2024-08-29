import React, { useState } from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        mobile_number: '',
        subject: '',
        comments: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.full_name) tempErrors.full_name = "Full Name is required";
        if (!formData.mobile_number) tempErrors.mobile_number = "Mobile Number is required";
        if (!formData.subject) tempErrors.subject = "Subject is required";
        if (!formData.comments) tempErrors.comments = "Message is required";
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempErrors = validate();
        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            // Submit form or send data to the server
            console.log("Form submitted successfully", formData);
        }
    };

    return (
        <div className="relative min-h-screen max-w-full">
            {/* Hero Section */}
            <div className='relative h-[300px] overflow-hidden bg-slate-800 md:p-5'>
                <div className='absolute inset-0'>
                    <img src="/img2.jpg" alt="" className='h-[300px] w-full object-cover opacity-70' />
                </div>
                <div className='relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 text-center md:px-2'>
                    <h1 className='mt-20 text-5xl font-semibold uppercase leading-tight text-white md:text-6xl'>Contact Us</h1>
                </div>
            </div>
            
            {/* Contact Form Section */}
            <div className='max-w-6xl mx-auto p-4 md:p-16 xl:p-20'>
                <div className='lg:w-2/3 space-y-5 text-center mx-auto'>
                    <h1 className='text-gray-800 uppercase tracking-widest dark:text-white font-medium text-4xl'>Get in Touch</h1>
                    <div className='h-0.5 bg-red-500 w-14 mx-auto'></div>
                    <p className='text-gray-600 dark:text-gray-300 text-base leading-6'>Send us your message by filling up the form below.</p>
                </div>

                <div className='flex w-full justify-center items-start mt-16'>
                    <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 w-full'>
                        {/* Contact Info */}
                        <div className='flex flex-col space-y-4 md:w-1/3 mr-16'>
                            <h2 className='text-base font-medium mb-2 dark:text-white'>Office Address</h2>
                            <p className='text-gray-600 text-sm font-medium leading-5'>Tulsipur-06, Dang, Nepal</p>
                            <h2 className='text-base font-medium mb-2 dark:text-white my-4'>Contact Number</h2>
                            <p className='text-gray-600 text-sm font-medium leading-5'>+977 985-7840366 | +977 980-9554906</p>
                            <h2 className='text-base font-medium mb-2 dark:text-white my-4'>E-mail</h2>
                            <p className='text-gray-600 text-sm font-medium leading-5'>nsdc366@gmail.com</p>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/newswargadwarydrivingcenter/" className="text-gray-800 hover:text-blue-800"><FaFacebook size={24} /></a>
                                <a href="https://www.instagram.com" className="text-gray-800 hover:text-pink-600"><FaInstagram size={24} /></a>
                                <a href="https://www.youtube.com" className="text-gray-800 hover:text-red-600"><FaYoutube size={24} /></a>
                            </div>
                        </div>

                        {/* Form */}
                        <div className='flex-1'>
                            <form onSubmit={handleSubmit}>
                                <div className='space-y-6'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div>
                                            <input
                                                type='text'
                                                name='full_name'
                                                id='full_name'
                                                placeholder='Enter Your Full Name'
                                                value={formData.full_name}
                                                onChange={handleChange}
                                                className={`border border-gray-400 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3 ${errors.full_name ? 'border-red-500' : ''}`}
                                            />
                                            {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
                                        </div>
                                        <div>
                                            <input
                                                type='text'
                                                name='mobile_number'
                                                id='mobile_number'
                                                placeholder='Enter Your Mobile Number'
                                                value={formData.mobile_number}
                                                onChange={handleChange}
                                                className={`border border-gray-400 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3 ${errors.mobile_number ? 'border-red-500' : ''}`}
                                            />
                                            {errors.mobile_number && <p className="text-red-500 text-xs mt-1">{errors.mobile_number}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type='text'
                                            name='subject'
                                            id='subject'
                                            placeholder='Enter Your Subject'
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`border border-gray-400 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3 ${errors.subject ? 'border-red-500' : ''}`}
                                        />
                                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                    </div>
                                    <div>
                                        <textarea
                                            name='comments'
                                            id='comments'
                                            placeholder='Enter your message'
                                            rows="3"
                                            value={formData.comments}
                                            onChange={handleChange}
                                            className={`border border-gray-400 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-500 w-full p-3 ${errors.comments ? 'border-red-500' : ''}`}
                                        ></textarea>
                                        {errors.comments && <p className="text-red-500 text-xs mt-1">{errors.comments}</p>}
                                    </div>
                                    <div className='text-right'>
                                        <input
                                            type="submit"
                                            id='submit'
                                            name='send'
                                            className='inline-block px-5 py-2.5 rounded text-sm cursor-pointer select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 hover:-translate-y-1.5 bg-red-500 text-white'
                                            value="Send Message"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
