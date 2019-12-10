import React, {useState, useEffect} from 'react';
import LoginComponent from '../login/login.component';

export default function NavHeaderComponent(props) {
    const [showLogin, setShowLogin] = useState(false);
    const [loginText, setLoginText] = useState('LOG IN');

    const showLoginFunc = () => {
        setShowLogin(!showLogin);
    }

    console.log("NavHeaderComponent props: ", props)
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
                    <a href="#log in" onClick={showLoginFunc}>{loginText}</a>
                </li>
            </ul>
        </nav>
        { showLogin && <LoginComponent />}
    </header>
    );
}