import React from 'react';

export default function LoginComponent(props) {
    const goToAnalyze = () => {
        alert("ANALYZE")
        props.history.push('/analyze');
    }
    const goToGenerate = () => {
        alert("GENERATE")
        props.history.push('/generate');
    }
    return (
        <div className="menu-container">
            <div className ="menu-button" id="analyze" onClick={goToAnalyze}>
                <h4>ANALYZE</h4>
                <div className="menu-icon" alt="SearchSeach"></div>
            </div>
            <div className="menu-button" id="generate" onClick={goToGenerate}>
                <h4>GENERATE</h4>
                <div className="menu-icon" alt="Cogcog"></div>
            </div>
        </div>
    );
}