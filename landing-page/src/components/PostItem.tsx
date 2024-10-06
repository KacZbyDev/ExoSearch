import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import NumberTicker from "@/components/ui/number-ticker.tsx";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button.tsx";




const PostItem = ({ post }) => {
    const [voteCount, setVoteCount] = useState(post.vote_count)
    const [isUpVoted, setIsUpVoted] = useState(false)
    useEffect(() => {
        console.log(post.vote_count)
    }, []);
    return (
        <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
                <Link to={`/Forum/Posts/${post.id}`}>{post.header}</Link>
            </h2>
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-slate-400">By: {post.profile.user.username}</span>
                <div className="flex items-center space-x-4">
                    {/* Upvote Button */}
                    <div className="text-sm">
                        <AnimatedSubscribeButton
                            buttonColor="#22c55e"
                            buttonTextColor="white"
                            subscribeStatus={isUpVoted}
                            initialText={<i className="bi bi-caret-up"></i>}
                            changeText={<i className="bi bi-caret-up-fill"></i>}

                        />
                    </div>

                    {/* Wyświetlanie Głosek */}
                    <NumberTicker
                        value={voteCount}
                        className="text-white font-bold text-2xl"
                    />

                    {/* Downvote Button */}
                    <div className="text-sm">
                        <AnimatedSubscribeButton
                            buttonColor="#ef4444"
                            buttonTextColor="white"
                            subscribeStatus={isUpVoted}
                            initialText={<i className="bi bi-caret-down"></i>}
                            changeText={<i className="bi bi-caret-down-fill"></i>}
                        />
                    </div>
                </div>
            </div>
            <p className="text-sm text-slate-300">{post.text}</p>
        </div>
    );
};

export default PostItem;