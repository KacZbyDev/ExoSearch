import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import questionsData from './../questions.json'; // Default import

const RecentPostComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-5 m-5 rounded-2xl bg-slate-900 font-mono">
           
            <div className="lg:hidden mb-4">
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-between w-full px-4 py-2 border rounded text-slate-400 border-slate-400 hover:text-white hover:border-white transition-colors"
                    aria-label="Toggle Recent Posts"
                    aria-expanded={isOpen}
                >
                    <span className="text-xl font-bold">Recent Questions</span>
                    <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-2xl`}></i>
                </button>
            </div>

            {/* Title for Large Screens */}
            <div className="hidden lg:block text-center mb-4">
                <span className="text-3xl font-bold tracking-widest">Recent Questions</span>
            </div>

            {/* Collapsible Content */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                <ul className="mt-4 space-y-2 max-h-96 overflow-y-auto">
                    {questionsData.slice(0, 6).map((item) => (
                        <li
                            key={item.id}
                            className="text-slate-400 text-sm hover:underline cursor-pointer flex justify-between items-center"
                        >
                            <Link to={`/Forum/Posts/${item.id}`} className="flex-1">
                                {item.title}
                            </Link>
                            <i className="bi bi-arrow-right-short ml-2 text-lg"></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecentPostComponent;
