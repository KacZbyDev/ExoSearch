import React, { useState } from "react";

interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

const questions: Question[] = [
    {
        question: "What is an exoplanet?",
        options: [
            "A planet outside our solar system",
            "A moon that orbits the Earth",
            "A star that is not part of the Milky Way",
            "An asteroid in the Kuiper Belt",
        ],
        correctAnswer: "A planet outside our solar system",
    },
    {
        question: "What method is most commonly used to discover exoplanets?",
        options: [
            "Gravitational Microlensing",
            "Transit Method",
            "Direct Imaging",
            "Radial Velocity",
        ],
        correctAnswer: "Transit Method",
    },
    {
        question: "Which exoplanet is located in the habitable zone of its star?",
        options: [
            "Proxima Centauri b",
            "HD 209458 b",
            "Kepler-22b",
            "WASP-12b",
        ],
        correctAnswer: "Kepler-22b",
    },
    {
        question: "Which space telescope has discovered the most exoplanets?",
        options: ["Hubble Space Telescope", "Spitzer Space Telescope", "Kepler", "James Webb Space Telescope"],
        correctAnswer: "Kepler",
    },
];

const ExoplanetQuiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null); // Reset option for the next question
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleRestartQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsQuizFinished(false);``
    };

    return (
        <div className="container mx-auto p-6 bg-slate-800 min-h-screen text-white minXC-w-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Exoplanet Quiz</h1>

            {isQuizFinished ? (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Quiz Finished!</h2>
                    <p className="mb-4 text-lg">Your score: {score} out of {questions.length}</p>
                    <button
                        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-200"
                        onClick={handleRestartQuiz}
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
                    <ul className="space-y-4">
                        {currentQuestion.options.map((option, index) => (
                            <li key={index}>
                                <button
                                    className={`block w-full p-3 rounded-lg border ${
                                        selectedOption === option
                                            ? "bg-blue-500 text-white"
                                            : "bg-slate-600 text-slate-100 hover:bg-slate-500"
                                    } transition-all duration-200`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200"
                        disabled={!selectedOption}
                        onClick={handleNextQuestion}
                    >
                        {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExoplanetQuiz;
