import React from "react";
import "../css/Form.css"

const Form = () => {
    return(
        <div>
            <div className="container">
	<div className="form sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<input type="email" placeholder="User Email"/>
			<input type="password" placeholder="Password"/>
			<a href="https://rpbloggers.com/">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>

	<div className="overlay-container">
    <div className="overlay">
        <div className="overlay-panel overlay-right">
            <h1>Sign UP</h1>
            <p>Sign up here if you don't have account.</p>
            <button className="signup_btn">Sign Up</button>
        </div>
    </div>
</div>
</div>
        </div>
    )
}

export default Form