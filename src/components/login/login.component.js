import React, {Component} from 'react';

 class LoginComponent extends Component {
    constructor(props) {
        super();
        this.changeLoc = () => {
            console.log("HALT props.history: ", props.history);
            props.history.push('/menu');
        }
    }
    state = {
        login: "",
        password: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    loginAction = (e) => {
        if(this.state.login === 'user1234' && this.state.password === "1234") {
           this.changeLoc();
        } else {
            alert("Login data is incorrect!");
        }
    }
    render() {
        return (
            <div className="login_cont">
                <h4 className="w3-center">Sign in</h4>
                <hr></hr>
                <form onSubmit={this.loginAction}>
                    <p>Username</p>
                    <input type="text" className="login-input" id="login" onChange={this.handleChange} placeholder="Username or email"/>
                    <p>Password</p>
                    <input type="password" className="login-input" id="password" onChange={this.handleChange} placeholder="Password"/>
                    <input type="submit" className="login-button" value="SIGN IN"/>
                    <a href="google.com">Forgot password?</a>
                </form>
                <hr></hr>
                <div>
                  <p>Newcommer?</p>
                  <div>
                    <button className="login-button">SIGN UP</button>
                    <span>It's free!</span>
                  </div>
                </div>
            </div>
                )
    }
}

export default LoginComponent;