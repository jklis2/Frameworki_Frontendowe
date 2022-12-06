import React, { FC } from "react";
import { User } from "../../../Entities/Users";
import { Button } from "../../../styleHelpers/Button";
import "../../../Component/css/Dashboard.css";

interface Props {
  currentUser: User | undefined;
  handleClickOpen(): void;
}

export const UserMenu: FC<Props> = (Props) => {
  return (
    <div className="dashboard-left-menu ">
      <div className="dashboard-left-menu-1">
        <div className="dashboard-left-menu-img">
          <img src={`${process.env.PUBLIC_URL}/img/Avatar.png`} alt="Avatar" />
        </div>
        <div className="dashboard-left-menu-user-info">
          <h3>User info:</h3>
          <div className="user-data">{Props.currentUser?.name}</div>
          <div className="user-data">{Props.currentUser?.username}</div>
          <div className="user-data">{Props.currentUser?.email}</div>
          <div className="user-data">{Props.currentUser?.phone}</div>
        </div>
      </div>
      <div className="dashboard-left-menu-2">
        <div className="dashboard-left-menu-user-address">
          <h3>User address:</h3>
          <div className="user-data">{Props.currentUser?.address.street}</div>
          <div className="user-data">{Props.currentUser?.address.suite}</div>
          <div className="user-data">{Props.currentUser?.address.city}</div>
          <div className="user-data">{Props.currentUser?.address.zipcode}</div>
        </div>
        <div className="dashboard-left-menu-user-company">
          <h3>User Company:</h3>
          <div className="user-data">{Props.currentUser?.company.website}</div>
          <div className="user-data">{Props.currentUser?.company.name}</div>
          <div className="user-data">
            {Props.currentUser?.company.catchPhrase}
          </div>
          <div className="user-data">{Props.currentUser?.company.bs}</div>
        </div>
      </div>
      <div className="dashboard-left-menu-button">
        <Button
          className="dashboard-left-menu-button-a"
          onClick={Props.handleClickOpen}
        >
          Edit profile
        </Button>
      </div>
    </div>
  );
};
