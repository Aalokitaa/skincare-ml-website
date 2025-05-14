import React, { useState } from 'react';
import problemsData from '../data/problems.json';

const ProblemSolution = () => {
    const [revealedIndex, setRevealedIndex] = useState(null);

    const handleProblemClick = (index) => {
        setRevealedIndex(revealedIndex === index ? null : index);
    };

    return (
        <div className="problem-solution">
            <h2>Common Skincare Problems and Solutions</h2>
            <ul>
                {problemsData.map((problem, index) => (
                    <li key={index}>
                        <button onClick={() => handleProblemClick(index)}>
                            {problem.problem}
                        </button>
                        {revealedIndex === index && <p>{problem.solution}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProblemSolution;