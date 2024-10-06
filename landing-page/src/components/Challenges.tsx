import { useState } from 'react';
import { Trophy, Sword, Brain } from 'lucide-react';
import Ranking from './Table.tsx';
const Challenges = () => {
    const [selectedQuest, setSelectedQuest] = useState<number | null>(null);

    const quests = [
        {
            id: 1,
            title: "Daily Champion",
            icon: <Trophy className="w-12 h-12 text-yellow-400" />,
            description: "Complete 2 Quizzes with a Score above 90%",
            reward: "50 XP",
            difficulty: "Easy"
        },
        {
            id: 2,
            title: "Mind Master",
            icon: <Brain className="w-12 h-12 text-purple-400" />,
            description: "Share on the Forum for 30 minutes",
            reward: "100 XP",
            difficulty: "Medium"
        },
        {
            id: 3,
            title: "Ultimate Warrior",
            icon: <Sword className="w-12 h-12 text-red-400" />,
            description: "Beat 1 team in a team battle",
            reward: "200 XP",
            difficulty: "Hard"
        }
    ];

    return (
        <div className="bg-slate-800 text-white min-h-screen rounded-xl">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold animate-pulse">
                        Challenges of the day
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-400">
                        Choose a Challenge and get a reward!
                    </p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {quests.map((quest) => (
                        <div
                            key={quest.id}
                            className={`
                                bg-slate-700 border-2 transition-all duration-300 cursor-pointer
                                transform hover:scale-105 hover:shadow-xl rounded p-6
                                ${selectedQuest === quest.id ? 'border-blue-400 shadow-blue-400/50' : 'border-slate-600'}
                            `}
                            onClick={() => setSelectedQuest(quest.id)}
                        >
                            <div className="space-y-4 text-center">
                                <div className="flex justify-center">
                                    {quest.icon}
                                </div>
                                <h2 className="text-2xl font-bold">{quest.title}</h2>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-300 justify text-center">{quest.description}</p>
                                <div className="flex justify-between items-center">
                                    <span
                                        className={`text-sm px-3 py-1 rounded-full ${
                                            quest.difficulty === 'Easy' ? 'bg-green-700' :
                                            quest.difficulty === 'Medium' ? 'bg-yellow-700' :
                                            'bg-red-700'
                                        }`}
                                    >
                                        {quest.difficulty}
                                    </span>
                                    <span className="text-yellow-400 font-bold">
                                        {quest.reward}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

               
                {selectedQuest && (
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                            Start the Challenge
                        </button>
                    </div>
                )}

                <div>
                    <Ranking/>
                </div>
            </div>
        </div>
    );
};

export default Challenges;
