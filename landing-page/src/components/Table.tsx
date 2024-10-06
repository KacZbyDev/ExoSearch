import React from 'react';

interface User {
    rank: number;
    username: string;
    score: number;
}

const RankingPage: React.FC = () => {
    const users: User[] = [
        { rank: 1, username: 'JohnDoe', score: 1500 },
        { rank: 2, username: 'JaneSmith', score: 1420 },
        { rank: 3, username: 'CosmoLover', score: 1300 },
        // Dodaj więcej użytkowników
    ];

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden  text-white">
            <div className="relative z-10 w-full max-w-4xl text-center space-y-6">
                <h1 className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold tracking-tight">
                    Ranking Użytkowników
                </h1>
                <table className="table-auto w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-gray-700 text-center justify">
                    <tr>
                        <th className="px-4 py-2 text-center text-lg text-pink-500">Miejsce</th>
                        <th className="px-4 py-2 text-center text-lg text-pink-500">Nazwa Użytkownika</th>
                        <th className="px-4 py-2 text-center text-lg text-pink-500">Punkty XP</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.rank} className="hover:bg-gray-700 transition-colors">
                            <td className="px-4 py-2 border-b border-gray-700">{user.rank}</td>
                            <td className="px-4 py-2 border-b border-gray-700">{user.username}</td>
                            <td className="px-4 py-2 border-b border-gray-700">{user.score}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-6">
                    <a href="/" className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-medium transition-transform transform hover:scale-105">
                        Powrót do Strony Głównej
                    </a>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
        </div>
    );
};

export default RankingPage;
