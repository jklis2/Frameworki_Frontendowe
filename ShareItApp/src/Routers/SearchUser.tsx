import React, { FC, useEffect, useState } from "react";
import { User } from "../Entities/Users";
import Header from "../Component/tsx/Header";
import UserForm from "../Component/tsx/UserForm";
import UserList from "../Component/tsx/UserList";
import "../Component/css/User/SearchUser.css";

const SearchUser: FC = () => {
  const [data, setData] = useState<Array<User>>([]);
  const [user, setUser] = useState<string>("");

  const fetchData = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="searchuser__container">
      <Header></Header>
      <div>
        <UserForm user={user} setUser={setUser} />
        {data.length > 0 && <UserList items={data} selectedUser={user} />}
      </div>
    </div>
  );
};

export default SearchUser;
