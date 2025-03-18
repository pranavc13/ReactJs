import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../Context/Context';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import Sidebar2 from '../SideBar2/SideBar2'; // Import the Sidebar component
import Swal from 'sweetalert2';

function ContactUs(props) {
    const { theme, toggleTheme } = useContext(Context);
    const formRef = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ac3b1770-55ef-4aa5-96f7-b2bba0b82faf");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you for contacting!",
                icon: "success"
            });
        }
    };

    return (
        <>
            <div className={`main flex-1 min-h-screen pb-[15vh] relative ${theme === "dark" ? "dark bg-neutral-900 text-white" : "bg-white text-black"}`}>
                {/* Sidebar2 positioned to the right */}
                
                    <Sidebar2 />
                
                {/* Navbar */}
                <div className='nav flex items-center justify-between text-2xl p-5'>
                    <p>Gemini</p>
                    <div className="flex items-center gap-4">
                        <div className='buttons text-xl '>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `py-2 px-3 duration-200 ${
                                        isActive
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500"
                                            : theme === "dark"
                                            ? "text-white"
                                            : "text-black"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                    `py-2 px-3 duration-200 ${
                                        isActive
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500"
                                            : theme === "dark"
                                            ? "text-white"
                                            : "text-black"
                                    }`
                                }
                            >
                                AboutUs
                            </NavLink>
                            <NavLink
                                to="/contactus"
                                className={({ isActive }) =>
                                    `py-2 px-3 duration-200 ${
                                        isActive
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500"
                                            : theme === "dark"
                                            ? "text-white"
                                            : "text-black"
                                    }`
                                }
                            >
                                ContactUS
                            </NavLink>
                        </div>
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                            {theme === "light" ? (
                                <img src={assets.moon_icon} alt="Dark Mode" className="w-6" />
                            ) : (
                                <img src={assets.sun_icon} alt="Light Mode" className="w-6" />
                            )}
                        </button>
                        <img src={assets.user_icon} alt="" className='w-10 rounded-xl' />
                    </div>
                </div>

                {/* Contact Form Section */}
                <section className='Contact flex justify-center items-center min-h-screen'>
                    <form onSubmit={onSubmit} className={`max-w-xl w-full ${theme === "dark" ? "bg-neutral-800" : "bg-white"} pt-8 pb-8 pl-8 pr-8 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] ${theme === "dark" ? "text-white" : "text-zinc-800"} m-6`}>
                        <h2 className='text-3xl text-center mb-6'>Contact Us</h2>
                        <div className='input-box mb-5'>
                            <label className='block mb-2'>First Name</label>
                            <input type="text" className={`field w-full h-12 bg-transparent border ${theme === "dark" ? "border-gray-600" : "border-gray-300"} outline-none rounded-md p-4 text-sm ${theme === "dark" ? "text-white" : "text-zinc-700"}`} placeholder='Enter Your First Name' name='name' required />
                        </div>
                        <div className='input-box mb-5'>
                            <label className='block mb-2'>Last Name</label>
                            <input type="text" className={`field w-full h-12 bg-transparent border ${theme === "dark" ? "border-gray-600" : "border-gray-300"} outline-none rounded-md p-4 text-sm ${theme === "dark" ? "text-white" : "text-zinc-700"}`} placeholder='Enter Your Last Name' name='last name' required />
                        </div>
                        <div className='input-box mb-5'>
                            <label className='block mb-2'>Email</label>
                            <input type="email" className={`field w-full h-12 bg-transparent border ${theme === "dark" ? "border-gray-600" : "border-gray-300"} outline-none rounded-md p-4 text-sm ${theme === "dark" ? "text-white" : "text-zinc-700"}`} placeholder='Enter Your Email-Address' name='email' required />
                        </div>
                        <div className='input-box mb-5'>
                            <label className='block mb-2'>Your Message</label>
                            <textarea className={`field w-full h-32 bg-transparent border ${theme === "dark" ? "border-gray-600" : "border-gray-300"} outline-none rounded-md p-4 text-sm ${theme === "dark" ? "text-white" : "text-zinc-700"}`} placeholder='Enter your message' name='message' required></textarea>
                        </div>
                        <button type="submit" className={`w-full h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200`}>Send Message</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default ContactUs;