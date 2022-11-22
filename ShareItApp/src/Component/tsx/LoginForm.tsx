import React, { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/LoginForm.css";

const LoginForm : FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userLoginChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const userPasswordChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const dispatch = useDispatch();

  console.log("Username: " + username + " Password: " + password)

  return (
    <div className="login">
      <div className="container">
        <div className="form sign-in-container">
          <form action="#">
            <h1>Sign in</h1>

            <input type="username"
             placeholder="Username"
             defaultValue={username} 
             onChange = {userLoginChange}
             />
            <input 
            type="password" 
            placeholder="Password"
            defaultValue={password} 
            onChange = {userPasswordChange}
            />
            <a href="/">Forgot your password?</a>
            <button><a href="/Dashboard">Login</a></button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Sign UP</h1>
              <p>Sign up here if you don't have account.</p>
              <a href="/Register">
                <button className="signup_btn">
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
