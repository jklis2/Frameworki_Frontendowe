import React from "react";
import "../css/UserList.css";
import { Card } from "react-bootstrap";
import User from "../../Entities/Users";

const UserList = (props: any) => {
  const userFilter = props.items.filter((obj : User) => {
    return obj.name.toLowerCase().includes(props.selectedUser.toString().toLowerCase());
  });

  return (
    <div className="d-flex flex-wrap">
      {userFilter.map((user: User) => {
        return (
          <Card key={user.id} border="info" className="list text-center">
            <Card.Header>{user.username}</Card.Header>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Info about user</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default UserList;
