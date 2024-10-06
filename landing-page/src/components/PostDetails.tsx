import React from 'react';
import { useParams, Link } from 'react-router-dom';
import questionsData from './../questions.json';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HyperText from "@/components/ui/hyper-text.tsx";

interface Post {
    id: number;
    title: string;
    content: string;
    upVotes: number;
    downVotes: number;
    user: string;
}

const PostDetails: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const post: Post | undefined = questionsData.find((q: { id: number; }) => q.id === parseInt(postId || '', 10));

    return (
        <>
            <div className="fixed flex justify-center items-center h-screen w-screen bg-slate-800">
                <div className="m-5 w-full"> 
                    <div className="container mx-auto p-6 text-white bg-slate-700
                                    w-full sm:w-full md:w-full lg:w-1/2
                                    flex flex-col justify-between rounded-3xl">
                        {post ? (
                            <>
                                <HyperText
                                    className="text-3xl font-bold mb-4 select-none
                                           whitespace-normal break-words overflow-ellipsis"
                                    text={post.title}
                                    duration={1}
                                />
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-slate-400">By: {post.user}</span>
                                    <div className="flex space-x-4">
                                        <span className="text-sm text-green-400">Upvotes: {post.upVotes}</span>
                                        <span className="text-sm text-red-400">Downvotes: {post.downVotes}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300">{post.content}</p>
                            </>
                        ) : (
                            <div className="flex flex-col items-center">
                                <p className="text-lg font-bold text-slate-400 mb-4">Post not found.</p>
                            </div>
                        )}
                        <div className="flex w-full justify-center mt-2">
                                {post ? (

                                    <Link
                                        className="hover:bg-purple-600 text-white bg-purple-700
                                               cursor-pointer p-4 rounded-full transition"
                                        to="/Forum/Create"
                                    >
                                        Create New Post
                                    </Link>

                                    ) : (
                                    <>
                                        <Link
                                            className="hover:bg-purple-600 text-white bg-purple-700
                                               cursor-pointer p-4 rounded-full transition mx-2"
                                            to="/Forum/Create"
                                        >
                                            Create New Post
                                        </Link>
                                        <Link className="hover:border-purple-600 text-white border border-purple-700
                                               cursor-pointer p-4 rounded-full transition mx-2"
                                              to="/"
                                        >
                                            Go back to Main Page
                                        </Link>
                                    </>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetails;
