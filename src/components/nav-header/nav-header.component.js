import React from 'react';

export default function NavHeaderComponent() {
    return (
		<header>
        <nav>
            <ul className="menu">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#top results">Top results</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
            </ul>
            <div className="logo">
                <h1>Poestro</h1>
            </div>
            <ul className="menu">
                <li>
                    <a href="#search">Search</a>
                </li>
                <li>
                    <a href="#register">Register</a>
                </li>
                <li>
                    <a href="#log in">LOG IN</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}