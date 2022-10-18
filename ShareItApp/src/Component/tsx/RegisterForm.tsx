import React, { FC } from "react";
import "../css/RegisterForm.css"

const RegisterForm: FC = () => {
    return(
        <div className="register">
            <div className="container">
	<div className="form sign-up-container">

		<form action="#">
		<h1>Sign UP</h1>
			<div className="forms">			
			<div className="personalData">
			<input type="text" placeholder="Name"/>
			<input type="text" placeholder="Surname"/>
			<input type="text" placeholder="Username"/>
			<input type="email" placeholder="User Email"/>
			<input type="text" placeholder="Phone"/>
			<input type="password" placeholder="Password"/>
			</div>

            <div className="address">
			<input type="text" placeholder="Street"/>
			<input type="text" placeholder="Suite"/>
			<input type="text" placeholder="City"/>
			<input type="text" placeholder="Zipcode"/>
			</div>
            
			{/* Ask about geo */}

            <div className="company">
			<input type="text" placeholder="Website"/>
			<input type="text" placeholder="Company Name"/>
			<input type="text" placeholder="Catch Phrase"/>
			<input type="text" placeholder="Bs"/>
			</div>
			</div>
			
			<div className="actions">
				<button>Sign Up</button>
				<button><a href="/Login">Back to login</a></button>
			</div>
		</form>
	</div>
</div>
        </div>
    )
}




export default RegisterForm