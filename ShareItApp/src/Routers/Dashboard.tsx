import React, { FC } from "react";
import "../Component/css/Dashboard.css";
import Header from "../Component/tsx/Header";
import { IState } from "../Redux/Reducers";
import { IUsersReducer } from "../Redux/Reducers/usersReducer";
import { getUsers } from "../Redux/actions/userActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type GetUsers = ReturnType<typeof getUsers>;
const Dashboard: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, [dispatch]);

  const { users } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));

  return (
    <>
      {users?.map((user) => {
        return (
          <div className="dashboard-container">
            <Header />
            <div className="container">
              <div className="dashboard-left-menu ">
                <div className="dashboard-left-menu-1">
                  <div className="dashboard-left-menu-img">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Avatar.png`}
                      alt="Avatar"
                    />
                  </div>
                  <div className="dashboard-left-menu-user-info">
                    <h3>User info:</h3>
                    <div className="user-data">{user.name}</div>
                    <div className="user-data">{user.username}</div>
                    <div className="user-data">{user.email}</div>
                    <div className="user-data">{user.phone}</div>
                  </div>
                </div>
                <div className="dashboard-left-menu-2">
                  <div className="dashboard-left-menu-user-address">
                    <h3>User address:</h3>
                    <div className="user-data">{user.address.street}</div>
                    <div className="user-data">{user.address.suite}</div>
                    <div className="user-data">{user.address.city}</div>
                    <div className="user-data">{user.address.zipcode}</div>
                  </div>
                  <div className="dashboard-left-menu-user-company">
                    <h3>User Company:</h3>
                    <div className="user-data">{user.company.website}</div>
                    <div className="user-data">{user.company.name}</div>
                    <div className="user-data">{user.company.catchPhrase}</div>
                    <div className="user-data">{user.company.bs}</div>
                  </div>
                </div>
                <div className="dashboard-left-menu-button">
                  <a className="dashboard-left-menu-button-a" href="/EditProfile">
                    <button>Edit profile</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Dashboard;
