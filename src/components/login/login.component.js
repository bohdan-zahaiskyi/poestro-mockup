import React, {useState, useEffect} from 'react';
import historyService from '../../services/history.service';

 function LoginComponent (props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [_history, setHistory] = useState('');

    useEffect(() => {
        historyService.getHistory().subscribe(h => {
            setHistory(h);
        })
    })
    
    const handleLogin = (e) => {
        setLogin(e.target.value)    
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)    
    };

    const loginAction = (e) => {
        console.log("this.props: ", props);
        if(login === 'user1234' && password === "1234") {
            _history.push('/menu');
        } else {
            alert("Login data is incorrect!");
        }
    }
    return (
        <div className="login_cont">
            <h4 className="w3-center">Sign in</h4>
            <hr></hr>
            <form >
                <p>Username</p>
                <input type="text" className="login-input" id="login" onChange={handleLogin} placeholder="Username or email" />
                <p>Password</p>
                <input type="password" className="login-input" id="password" onChange={handlePassword} placeholder="Password" />
                <button className="login-button" onClick={loginAction}>SIGN IN</button>
                <a href="google.com">Forgot password?</a>
            </form>
            <hr></hr>
            <div>
                <p>Newcommer?</p>
                <div>
                    <button className="login-button" onClick={loginAction}>SIGN UP</button>
                    <span>It's free!</span>
                </div>
            </div>
        </div>
        );
}

export default LoginComponent;