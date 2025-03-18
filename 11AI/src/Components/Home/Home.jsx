import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context"; // Import Context
import { Link, NavLink } from "react-router-dom";

function Home() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    theme,
    toggleTheme,
  } = useContext(Context);

  return (
    <div
      className={`main flex-1 min-h-screen pb-[15vh] relative ${
        theme === "dark"
          ? "dark bg-neutral-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="nav flex items-center justify-between text-2xl p-5">
        <p>Gemini</p>
        <div className="flex items-center gap-4">
          {/* Sun and Moon Toggle Button */}

          <div className="buttons text-xl ">
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

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <img src={assets.moon_icon} alt="Dark Mode" className="w-6" /> // Use moon.png
            ) : (
              <img src={assets.sun_icon} alt="Light Mode" className="w-6" /> // Use sun.png
            )}
          </button>
          <img src={assets.user_icon} alt="" className="w-10 rounded-xl" />
        </div>
      </div>
      <div className="main-container max-w-4xl m-auto">
        {!showResult ? (
          <>
            <div className="greet mt-12 mb-12 ml-0 mr-0 text-6xl p-5">
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                  Hello, Pranav.{" "}
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="Cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
              <div className="card h-48 p-4 bg-slate-100 dark:bg-neutral-800 rounded-xl relative cursor-pointer hover:bg-zinc-200 dark:hover:bg-neutral-700">
                <p className="text-zinc-600 dark:text-white text-base">
                  Suggest Beautiful places to see on an upcoming road Trip{" "}
                </p>
                <img
                  src={assets.compass_icon}
                  alt=""
                  className="w-8 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
              <div className="card h-48 p-4 bg-slate-100 dark:bg-neutral-800 rounded-xl relative cursor-pointer hover:bg-zinc-200 dark:hover:bg-neutral-700">
                <p className="text-zinc-600 dark:text-white text-base">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  alt=""
                  className="w-8 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
              <div className="card h-48 p-4 bg-slate-100 dark:bg-neutral-800 rounded-xl relative cursor-pointer hover:bg-zinc-200 dark:hover:bg-neutral-700">
                <p className="text-zinc-600 dark:text-white text-base">
                  Briefly summarize this concept : urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  alt=""
                  className="w-8 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
              <div className="card h-48 p-4 bg-slate-100 dark:bg-neutral-800 rounded-xl relative cursor-pointer hover:bg-zinc-200 dark:hover:bg-neutral-700">
                <p className="text-zinc-600 dark:text-white text-base">
                  Improve the readability of the following code{" "}
                </p>
                <img
                  src={assets.code_icon}
                  alt=""
                  className="w-8 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result p-0 max-h-[70vh] overflow-y-scroll">
            <div className="result-title mt-10 mb-10 ml-0 mr-0 flex items-center gap-5">
              <img src={assets.user_icon} alt="" className="w-10 rounded-2xl" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img src={assets.gemini_icon} alt="" className="w-10" />
              {loading ? (
                <div className="loader w-full flex flex-col gap-3">
                  <div className="loader-bar h-5 bg-gradient-to-r from-blue-300 to-blue-300 via-white bg-[length:800px_50px] animate-loader"></div>
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-xl font-light dark:text-white"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full max-w-4xl pt-0 pb-0 pl-5 pr-5 m-auto rounded-2xl">
          <div className="search-box flex items-center gap-4 bg-slate-100 dark:bg-neutral-800 p-3 rounded-lg">
            <input
              type="text"
              placeholder="Enter the prompt here"
              className="flex-1 bg-transparent outline-none border-none p-2 text-xl rounded-xl dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex items-center gap-3">
              <img
                src={assets.gallery_icon}
                alt=""
                className="w-6 cursor-pointer"
              />
              <img
                src={assets.mic_icon}
                alt=""
                className="w-6 cursor-pointer"
              />
              <img
                src={assets.send_icon}
                alt=""
                className="w-6 cursor-pointer"
                onClick={() => onSent(input)}
              />
            </div>
          </div>
          <p className="bottom-info mt-2 text-sm text-zinc-500 dark:text-zinc-400 text-base m-4 m-auto text-center">
            Gemini may display inaccurate info, including about people, so
            double-check
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
