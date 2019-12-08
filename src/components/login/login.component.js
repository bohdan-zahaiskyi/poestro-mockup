import React from 'react';

export default function LoginComponent() {
    return (
<div class="login_cont">
    <h4 class="w3-center">Sign in</h4>
    <hr></hr>
    <p>Username</p>
    <input type="text" className="login-input" name="login" placeholder="Username or email"/>
    <p>Password</p>
    <input type="password" className="login-input" name="password" placeholder="Password"/>
    <input type="submit" className="login-button" value="SIGN IN"/>
    <a href="google.com">Forgot password?</a>
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