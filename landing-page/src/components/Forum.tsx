import "../App.css";
import RecentPostComponent from "./RecentPostComponent";
import PostComponent from "./PostComponent";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useState} from "react";


const Forum: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="bg-slate-800 min-h-screen text-white">
            <div className="container mx-auto px-4">
                <header className="text-center py-12">
                    <h1 className="text-6xl font-mono">ExoAsk</h1>
                    <div className="relative flex items-center justify-center mt-6">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full max-w-md px-4 py-2 border-b border-slate-600 text-purple-300 bg-transparent focus:border-purple-500 hover:border-purple-700 transition-colors outline-none"
                            placeholder="Search..."
                        />
                        <button className="p-3 rounded-full hover:text-purple-700 transition-all cursor-pointer focus:text-purple-300">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </header>

                <main className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 lg:order-1 order-2">
                        <PostComponent searchQuery={searchQuery} />
                    </div>
                    <aside className="w-full lg:w-1/3 lg:pl-8">
                        <RecentPostComponent />
                    </aside>
                </main>
            </div>
        </div>
    );
};

export default Forum;