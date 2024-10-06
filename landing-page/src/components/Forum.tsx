
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    content: string;
    vote_count: number;
    // Add other fields as necessary
}

interface PostComponentProps {
    searchQuery: string;
}

const PostComponent: React.FC<PostComponentProps> = ({ searchQuery }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchPosts();
    }, [searchQuery]);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/posts/?search=${searchQuery}`, {
                withCredentials: true, // Include credentials if required by your backend
            });
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleVote = async (postId: number, isUpvoted: boolean) => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/handle-vote',
                {
                    target_type: 'post',
                    target_id: postId,
                    is_upvoted: isUpvoted,
                },
                {
                    withCredentials: true,
                }
            );

            console.log(response.data.message);

            // Update the vote count locally or refetch posts
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId
                        ? { ...post, vote_count: post.vote_count + (isUpvoted ? 1 : -1) }
                        : post
                )
            );
        } catch (error) {
            console.error('Error handling vote:', error);
        }
    };

    return (
        <div>
            {loading ? (
                <p>Loading posts...</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="bg-slate-700 p-4 mb-4 rounded">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p>{post.content}</p>
                        <div className="flex items-center mt-2">
                            <button
                                className="mr-2 text-green-500 hover:text-green-700"
                                onClick={() => handleVote(post.id, true)}
                            >
                                <i className="bi bi-hand-thumbs-up-fill"></i>
                            </button>
                            <button
                                className="mr-2 text-red-500 hover:text-red-700"
                                onClick={() => handleVote(post.id, false)}
                            >
                                <i className="bi bi-hand-thumbs-down-fill"></i>
                            </button>
                            <span>Votes: {post.vote_count}</span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostComponent;