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
        <div className="user-info">jjjjaaaaa</div>
      </div>
    </div>
    </div>
  );
};
export default Dashboard;
