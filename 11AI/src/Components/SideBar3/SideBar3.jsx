import React from 'react';
import { assets } from '../../assets/assets';

function Sidebar3() {
    const socialMediaLinks = [
        { id: 1, icon: assets.instagram_icon, url: 'https://www.instagram.com/pranav.c_10/?hl=en' },
        { id: 2, icon: assets.linkedin_icon, url: 'https://www.linkedin.com/in/pranav-chaturvedi-a961a12ba/' },
        { id: 3, icon: assets.twitter_icon, url: 'https://x.com/Pranavc_14' },
        { id: 4, icon: assets.whatsapp_icon, url: 'https://web.whatsapp.com/' },
    ];

    return (
        <div className="fixed top-1/2 mr-2 transform -translate-y-1/2 right-0 bg-white dark:bg-neutral-800 shadow-lg rounded-xl p-4 z-50">
            <div className="flex flex-col space-y-4">
                {socialMediaLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform transition-transform duration-300 hover:scale-110"
                    >
                        <img src={link.icon} alt={`Social Media Icon ${link.id}`} className="w-8 h-8" />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Sidebar3;