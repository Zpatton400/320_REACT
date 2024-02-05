// App.js
import React, { useState } from 'react';
import Learner from './Learner';

function App() {
    const [learnerData, setLearnerData] = useState({
        learners: [
            // ... your data here
        ]
    });

    return (
        <div className="App" style={{backgroundColor: '#FDFFF0'}}>
            {learnerData.learners.map((learner, index) => (
                <Learner key={index} learner={learner} />
            ))}
        </div>
    );
}

export default App;

// Learner.js
import React from 'react';
import Score from './Score';

function Learner({ learner }) {
    return (
        <div className="Learner">
            <h2>{learner.name}</h2>
            <p>{learner.bio}</p>
            {learner.scores.map((score, index) => (
                <Score key={index} score={score} />
            ))}
        </div>
    );
}

export default Learner;

// Score.js
import React from 'react';

function Score({ score }) {
    return (
        <div className="Score">
            <p>{score.date}: {score.score}</p>
        </div>
    );
}

export default Score;