import React, { useState } from "react";

interface TeamType {
    id: number;
    name: string;
    users: string[];
}

const teamsData: TeamType[] = [
    { id: 1, name: "Team Alpha", users: ["Anna", "John", "Steve"] },
    { id: 2, name: "Team Beta", users: ["Sophie", "Mark", "Laura"] },
    { id: 3, name: "Team Gamma", users: ["Tom", "Jerry", "Emma"] },
];

const Teams: React.FC = () => {
    const [selectedTeam, setSelectedTeam] = useState<TeamType | null>(null);
    const [newTeamName, setNewTeamName] = useState<string>("");

    const [teams, setTeams] = useState<TeamType[]>(teamsData);

    const handleTeamClick = (team: TeamType) => {
        setSelectedTeam(team);
    };

    const handleRequestToJoin = () => {
        if (selectedTeam) {
            alert(`Request to join ${selectedTeam.name} sent!`);
        }
    };

    const handleCreateTeam = () => {
        if (newTeamName) {
            const newTeam: TeamType = {
                id: teams.length + 1,
                name: newTeamName,
                users: [], // Empty users list
            };
            setTeams([...teams, newTeam]);
            setNewTeamName("");
            alert(`New team "${newTeam.name}" created!`);
        } else {
            alert("Please enter a team name.");
        }
    };

    return (
        <div className="container mx-auto p-4 bg-slate-800 min-h-screen min-w-full">
            <h1 className="text-2xl font-bold mb-4 text-slate-50">Teams</h1>
            <div className="grid grid-cols-2 gap-6">

                <div className="bg-slate-700 p-5 rounded-lg shadow-md min-h-screen min-w-screen">
                    <h2 className="text-xl font-semibold mb-4 text-slate-100">Dostępne Drużyny</h2>
                    <ul>
                        {teams.map((team) => (
                            <li
                                key={team.id}
                                className="p-3 mb-2 bg-slate-600 rounded-lg shadow cursor-pointer hover:bg-slate-500 transition-all duration-200 text-slate-50"
                                onClick={() => handleTeamClick(team)}
                            >
                                {team.name}
                            </li>
                        ))}
                    </ul>
                </div>


                {selectedTeam && (
                    <div className="bg-slate-600 p-5 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-slate-100">Drużyna {selectedTeam.name}</h2>
                        <h3 className="text-lg font-medium mb-2 text-slate-200">członkowie:</h3>
                        <ul className="list-disc ml-5">
                            {selectedTeam.users.length > 0 ? (
                                selectedTeam.users.map((user, index) => (
                                    <li key={index} className="p-2 bg-slate-700 rounded-lg mb-2 text-slate-300">
                                        {user}
                                    </li>
                                ))
                            ) : (
                                <li className="p-2 bg-slate-700 rounded-lg text-slate-300">No members yet</li>
                            )}
                        </ul>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
                            onClick={handleRequestToJoin}
                        >
                            Spytaj o dołączenie
                        </button>
                    </div>
                )}
            </div>


            <div className="mt-10 bg-slate-700 p-5 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-slate-100">Stwórz własną drużynę</h2>
                <div className="mb-4">
                    <label className="block mb-2 font-medium text-slate-200">Nazwa Drużyny</label>
                    <input
                        type="text"
                        className="p-2 border border-slate-500 rounded-lg w-full bg-slate-800 text-slate-200"
                        value={newTeamName}
                        onChange={(e) => setNewTeamName(e.target.value)}
                    />
                </div>

                <button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
                    onClick={handleCreateTeam}
                >
                    Stwórz Drużynę
                </button>
            </div>
        </div>
    );
};

export default Teams;
