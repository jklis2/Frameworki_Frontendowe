import React, { FC } from "react";
import "../Component/css/Dashboard.css";
import Header from "../Component/tsx/Header";

const Dashboard: FC = () => {
  return (
    <div className="dashboard-container">
      <Header />
    <div className="container">
    <div className="dashboard-left-menu ">
      <div className="dashboard-left-menu-1">
        <div className="dashboard-left-menu-img">
          <img src={`${process.env.PUBLIC_URL}/img/Avatar.png`} alt="Avatar" />
        </div>
        <div className="dashboard-left-menu-user-info">
          <h3>User info:</h3>
          <div className="user-data">Name Surname</div>
          <div className="user-data">Username</div>
          <div className="user-data">User email</div>
          <div className="user-data">User phone number</div>
        </div>
      </div>
      <div className="dashboard-left-menu-2">
        <div className="dashboard-left-menu-user-address">
          <h3>User address:</h3>
          <div className="user-data">Street</div>
          <div className="user-data">Suiter</div>
          <div className="user-data">City</div>
          <div className="user-data">Zip code</div>
        </div>
        <div className="dashboard-left-menu-user-company">
          <h3>User Company:</h3>
          <div className="user-data">Web site</div>
          <div className="user-data">Company name</div>
          <div className="user-data">Catch phrase</div>
          <div className="user-data">Bs</div>
        </div>
      </div>
        <div className="dashboard-left-menu-button">
      <a className="dashboard-left-menu-button-a" href="#">
          <button>Edit profile</button>
      </a>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Dashboard;
