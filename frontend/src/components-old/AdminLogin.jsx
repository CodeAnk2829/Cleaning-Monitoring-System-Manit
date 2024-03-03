import React from 'react';
import './styles-login.css'; // Make sure to import your CSS file

export default function UserLogin() {
  return (
    <div className="login-container">
      <div className="top">
        <header>User Login</header>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder="Username or Email" id="loginname" />
        <i className="bx bx-user"></i>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" placeholder="Password" />
        <i className="bx bx-lock-alt"></i>
      </div>
      <div className="input-box">
        <input type="submit" onClick={valueSender} className="submit" value="Sign In" />
      </div>
      <div className="two-col">
        <div className="one"></div>
        <div className="two">
          <label><a href="login.html">Admin Login</a></label>
        </div>
      </div>
    </div>
  );
}
