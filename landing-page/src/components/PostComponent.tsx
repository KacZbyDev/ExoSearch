import React, { useState, useEffect } from 'react';
import questionsData from './../questions.json';
import PostItem from './PostItem'; // Import nowego komponentu

interface Post {
    id: number;
    title: string;
    content: string;
    upVotes: number;
    downVotes: number;
    user: string;
}

const PostComponent: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
    const postsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [showGreeting, setShowGreeting] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);

    const filteredPosts: Post[] = questionsData.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (currentPage === totalPages) {
            setShowGreeting(true);
        } else {
            setShowGreeting(false);
        }
    }, [currentPage, totalPages]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/get-post')
            .then(res => res.json())
            .then(data=>setFetchedData(data))
            .catch(error => console.log(error));
        console.log(fetchedData)
        }, []);


    return (
        <div className="space-y-8">
            {fetchedData.map((item:any) => (
                <PostItem key={item.id} post={item} />
            ))}

            {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-full border border-slate-700 ${currentPage === 1 ? 'text-slate-500 cursor-not-allowed' : 'text-white hover:bg-slate-700'}`}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-1 rounded-full border border-slate-700 ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'text-white hover:bg-slate-700'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded-full border border-slate-700 ${currentPage === totalPages ? 'text-slate-500 cursor-not-allowed' : 'text-white hover:bg-slate-700'}`}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            )}

            <div
                className={`text-center mt-8 text-lg font-bold transition-opacity duration-1000 ${showGreeting ? 'opacity-100' : 'opacity-0'}`}
            >
                To jest koniec.
            </div>
        </div>
    );
};

export default PostComponent;