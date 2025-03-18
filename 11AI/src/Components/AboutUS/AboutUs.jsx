import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../Context/Context';
import { NavLink } from 'react-router-dom';
import '../../Components/AboutUS/AboutUS.css';
import Sidebar3 from '../SideBar3/SideBar3';
import InfinitySymbol from './InfinitySymbol';

function AboutUs(props) {
    const { theme, toggleTheme } = useContext(Context);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const toggleCard = () => {
        setIsCardVisible(!isCardVisible);
    };

    return (
        <div className={`main flex-1 min-h-screen pb-[15vh] relative ${theme === "dark" ? "dark bg-neutral-900 text-white" : "bg-white text-black"}`}>
            {/* Navbar */}
            <div className='nav flex items-center justify-between text-2xl p-5'>
                <p>Gemini</p>
                <div className="flex items-center gap-4">
                    <div className='buttons text-xl'>
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
                            <img src={assets.moon_icon || "/placeholder.svg"} alt="Dark Mode" className="w-6" />
                        ) : (
                            <img src={assets.sun_icon || "/placeholder.svg"} alt="Light Mode" className="w-6" />
                        )}
                    </button>
                    <img src={assets.user_icon || "/placeholder.svg"} alt="" className='w-10 rounded-xl' />
                </div>
            </div>

            {/* Design Section */}
            <div className="design-section flex flex-col mt-24 ml-52 md:ml-20 sm:ml-10">
                <div className="flex items-start gap-8 ">
                    <div>
                        <div className='flex items-center justify-between'>
                        <h1 className="text-4xl font-bold">Pranav Chaturvedi</h1>
                        <div className='ml-56'>
                        <InfinitySymbol />
                        </div>
                        

                        </div>
                       
                        <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8 w-80">
                            ASPIRING Programmer
                        </p>
                        <div className="flex items-center gap-8">
                            <button
                                onClick={toggleCard}
                                className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group w-32"
                            >
                                About Me
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 100 100"
                                    className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100"
                                >
                                    <g transform="translate(0,-952.36218)">
                                        <path
                                            style={{
                                                textIndent: 0,
                                                textTransform: 'none',
                                                direction: 'ltr',
                                                blockProgression: 'tb',
                                                baselineShift: 'baseline',
                                                color: '#000000',
                                                enableBackground: 'accumulate',
                                            }}
                                            d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                                            fill="#fff"
                                            fillOpacity="1"
                                            stroke="white"
                                            strokeWidth="2"
                                            marker="none"
                                            visibility="visible"
                                            display="inline"
                                            overflow="visible"
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='infinity-symbol-container relative ml-48 mt-2'>
                    </div>
                </div>
            </div>

            {/* About Me Card */}
            {isCardVisible && (
                <div className="about-me-card fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-lg max-w-4xl w-full z-50 flex flex-col md:flex-row">
                    <div className="content flex-1 pr-8">
                        <h2 className="text-3xl font-bold mb-6">ABOUT ME</h2>
                        <p className="mb-6 text-lg">
                            👋 Hello, I'm Pranav Chaturvedi, a driven Computer Science and Engineering student at VIT Bhopal with a passion for learning and innovation.
                        </p>
                        <p className="mb-6 text-lg">
                            💡 Currently immersed in honing my skills in C++, DSA, and exploring the field of web development, I thrive on the challenges and opportunities presented by the ever-evolving tech landscape.
                        </p>
                        <div className="tech-stack grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>HTML</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>CSS</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>Tailwind</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>JavaScript</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>ReactJS</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>React-DOM</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>Redux</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>figma</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>git</span>
                            <span className='border border-gray-400 px-3 py-1 rounded-3xl'>github</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Aspiring Programmer</h3>
                        <button
                            onClick={toggleCard}
                            className="mt-4 w-20 bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                    <div className="image-container w-full md:w-1/3 mt-8 md:mt-0">
                        <img src={assets.user2_icon || "/placeholder.svg"} alt="User" className="w-full h-auto" />
                    </div>
                </div>
            )}

            {/* Sidebar2 positioned to the right */}
            <div className="fixed right-0 top-1/2 rounded-xl h-full">
                <Sidebar3 />
            </div>
        </div>
    );
}

export default AboutUs;