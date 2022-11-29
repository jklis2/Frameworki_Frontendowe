import React, { FC } from "react";
import Header from "../Component/tsx/Header";
import LoginForm from "../Component/tsx/LoginForm";

const Login: FC = () => {
  return (
    <div>
         <div className="d-none">
            <Header></Header>
          </div>
         <LoginForm/>
    </div>
  )
};

export default Login;
