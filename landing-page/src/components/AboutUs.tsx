import "../App.css";
import Andrzej from "../assets/profileImg/Andrzej.png";
import Janek from "../assets/profileImg/Janek.png";
import Tomek from "../assets/profileImg/Tomek.png";
import Kamil from "../assets/profileImg/Kamil.png";
import Kacper from "../assets/profileImg/Kacper.png";
import githubLogo from "../assets/githubLogo.svg";

const AboutUs = () => {
    return (
        <>
            <div className="bg-slate-800 text-white min-h-screen w-full">
                <div className="flex items-center justify-center h-full p-4 md:p-8 lg:p-16 container mx-auto max-w-7xl">
                    <div className="text-base sm:text-lg w-full">
                        <div className="max-w-4xl mx-auto">
                            <span className="font-bold text-xl sm:text-2xl block mb-4 text-center justify">Prawy Przycisk Myszy</span>
                            <p className="text-sm sm:text-base lg:text-lg text-center justify">
                                is a team of creative and passionate technology developers,
                                Who decided to combine their skills,
                                to create an innovative educational website about exoplanets.
                                Our goal is to bring users closer to the fascinating world of
                                of planets located outside the solar system,
                                in a way that is accessible to both the layperson and astronomy enthusiasts.
                            </p>
                        </div>

                        <div className="text-base sm:text-lg pt-8 md:pt-12 lg:pt-16">
                            <p className="mb-8 justify text-center">Our team consists of programmers from various fields:</p>
                            <ul className="list-disc list-inside space-y-8">
                                
                                    <p className="mb-6 text-center ">Front-end developers:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-slate-700 border border-slate-600 rounded flex flex-col sm:flex-row items-center p-4">
                                            <img src={Andrzej} className="w-16 sm:w-20 md:w-24 lg:w-28 rounded-lg" alt="Andrzej Bajcarczyk" />
                                            <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:items-start"> 
                                                <span className="text-center sm:text-left mb-2">Andrzej Bajcarczyk</span> 
                                                <a href="https://github.com/Andrz3jj" 
                                                    className="flex items-center justify-center bg-white text-black rounded hover:bg-gray-200 transition px-2 py-1 w-24">
                                                    <img src={githubLogo} alt="Github logo" className="w-4 h-4 mr-2" />
                                                    Github
                                                </a>
                                            </div>
                                        </div>

                                        <div className="bg-slate-700 border border-slate-600 rounded flex flex-col sm:flex-row items-center p-4"> 
                                            <img src={Janek} className="w-16 sm:w-20 md:w-24 lg:w-28 rounded-lg" alt="Jan Florek" />
                                            <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:items-start"> 
                                                <span className="text-center sm:text-left mb-2">Jan Florek</span> 
                                                <a href="https://github.com/WavyWare" 
                                                    className="flex items-center justify-center bg-white text-black rounded hover:bg-gray-200 transition px-2 py-1 w-24">
                                                    <img src={githubLogo} alt="Github logo" className="w-4 h-4 mr-2" />
                                                    Github
                                                </a>
                                            </div>
                                        </div>

                                        <div className="bg-slate-700 border border-slate-600 rounded flex flex-col sm:flex-row items-center p-4">
                                            <img src={Tomek} className="w-16 sm:w-20 md:w-24 lg:w-28 rounded-lg" alt="Tomasz Tłusty" />
                                            <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:items-start"> 
                                                <span className="text-center sm:text-left mb-2">Tomasz Tłusty</span> 
                                                <a href="https://github.com/FarciarzYT" 
                                                    className="flex items-center justify-center bg-white text-black rounded hover:bg-gray-200 transition px-2 py-1 w-24">
                                                    <img src={githubLogo} alt="Github logo" className="w-4 h-4 mr-2" />
                                                    Github
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                

                                
                                    <p className="mb-6 text-center">Back-end developers:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-700 border border-slate-600 rounded flex flex-col sm:flex-row items-center p-4">
                                            <img src={Kamil} className="w-16 sm:w-20 md:w-24 lg:w-28 rounded-lg" alt="Kamil Konieczny" />
                                            <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:items-start">
                                                <span className="text-center sm:text-left mb-2">Kamil Konieczny</span>
                                                <a href="https://github.com/kamelkali" 
                                                    className="flex items-center justify-center bg-white text-black rounded hover:bg-gray-200 transition px-2 py-1 w-24">
                                                    <img src={githubLogo} alt="Github logo" className="w-4 h-4 mr-2" />
                                                    Github
                                                </a>
                                            </div>
                                        </div>

                                        <div className="bg-slate-700 border border-slate-600 rounded flex flex-col sm:flex-row items-center p-4">
                                            <img src={Kacper} className="w-16 sm:w-20 md:w-24 lg:w-28 rounded-lg" alt="Kacper Zbyrad" />
                                            <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:items-start">
                                                <span className="text-center sm:text-left mb-2">Kacper Zbyrad</span>
                                                <a href="https://github.com/KacZbyDev" 
                                                    className="flex items-center justify-center bg-white text-black rounded hover:bg-gray-200 transition px-2 py-1 w-24">
                                                    <img src={githubLogo} alt="Github logo" className="w-4 h-4 mr-2" />
                                                    Github
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;