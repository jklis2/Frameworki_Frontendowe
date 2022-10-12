import React from "react";
import "../css/RegisterForm.css"

const RegisterForm = () => {
    return(
        <div>
            <div className="container">
	<div className="form sign-up-container">
		<form action="#">
			<h1>Sign UP</h1>
			<input type="email" placeholder="User Email"/>
			<input type="password" placeholder="Password"/>
			<button>Sign Up</button>
		</form>
	</div>
</div>
        </div>
    )
}




export default RegisterForm