import React, { FC } from "react";
import "../Component/css/Dashboard.css";
import Header from "../Component/tsx/Header";

const Dashboard: FC = () => {
  return (
    <div className="dashboard-container">
      <Header />
    <div className="container">
    <div className="dashboard-left-menu ">
        <img src={`${process.env.PUBLIC_URL}/img/Avatar.png`} alt="Avatar" />
        <h3>User info:</h3>
        <div className="user-data">Name Surname</div>
        <div className="user-data">Username</div>
        <div className="user-data">User email</div>
        <div className="user-data">User phone number</div>
        <h4>User address:</h4>
        <div className="user-data">Street</div>
        <div className="user-data">Suiter</div>
        <div className="user-data">City</div>
        <div className="user-data">Zip code</div>
        <h5>User Company:</h5>
        <div className="user-data">Web site</div>
        <div className="user-data">Company name</div>
        <div className="user-data">Catch phrase</div>
        <div className="user-data">Bs</div>
        <button>Edit profile</button>
      </div>
    </div>
    </div>
  );
};
export default Dashboard;
