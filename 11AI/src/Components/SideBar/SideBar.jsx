import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../Context/Context"; // Import Context

export function SideBar() {
    const [extended, setExtended] = useState(false);
    const { theme } = useContext(Context); // Access theme from context
    const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)
    return (
        <div className={`Sidebar min-h-screen inline-flex flex-col ${theme === "dark" ? "bg-neutral-800 text-white" : "bg-slate-100 text-black"} justify-between pt-6 pb-6 pl-4 pr-4`}>
            <div className="top">
                <img
                    onClick={() => setExtended((prev) => !prev)}
                    className="menu w-5 block ml-3 cursor-pointer"
                    src={assets.menu_icon}
                    alt=""
                />
                <div className={`new-chat mt-12 inline-flex items-center gap-3 pt-3 pb-3 pl-4 pr-4 ${theme === "dark" ? "bg-neutral-800 text-white" : "bg-slate-200 text-gray-500"} rounded-3xl text-sm cursor-pointer`}>
                    <img src={assets.plus_icon} className="w-5"></img>
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ? (
                    <div className="recent flex flex-col">
                        <p className={`recent-title mt-8 mb-5 ${theme === "dark" ? "text-white" : "text-gray-500"}`}>Recent</p>
                        {prevPrompts.map((item,index)=>{
                          return(
                            <div className={`recent-entry flex items-start gap-2 p-2 pr-10 rounded-3xl ${theme === "dark" ? "bg-neutral-800 text-white hover:bg-gray-800" : "bg-slate-200 text-zinc-800 hover:bg-gray-200"} cursor-pointer`}>
                            <img src={assets.message_icon} className="w-5" alt="" />
                            <p>{item}...</p>
                        </div>
                          )

                        })}
                        
                            
                    </div>
                ) : null}
            </div>
            <div className="bottom flex flex-col">
                <div className={`bottom-item recent-entry flex items-start gap-2 p-2 pr-10 rounded-3xl ${theme === "dark" ? "bg-neutral-800 text-white hover:bg-gray-800" : "bg-slate-200 text-zinc-800 hover:bg-gray-200"} cursor-pointer`}>
                    <img src={assets.question_icon} className="w-5" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className={`bottom-item recent-entry flex items-start gap-2 p-2 pr-10 rounded-3xl ${theme === "dark" ? "bg-neutral-800 text-white hover:bg-gray-800" : "bg-slate-200 text-zinc-800 hover:bg-gray-200"} cursor-pointer`}>
                    <img src={assets.history_icon} className="w-5" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className={`bottom-item recent-entry flex items-start gap-2 p-2 pr-10 rounded-3xl ${theme === "dark" ? "bg-neutral-800 text-white hover:bg-gray-800" : "bg-slate-200 text-zinc-800 hover:bg-gray-200"} cursor-pointer`}>
                    <img src={assets.setting_icon} className="w-5" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
}

export default SideBar;