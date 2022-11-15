import React, { FC } from "react";
import "../css/LoginForm.css";

const LoginForm: FC = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="form sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="User Email" />
            <input type="password" placeholder="Password" />
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
