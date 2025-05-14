import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from './components/WelcomeMessage';
import ProblemSolution from './components/ProblemSolution';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
    return (
        <div>
            <WelcomeMessage />
            <ProblemSolution />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));