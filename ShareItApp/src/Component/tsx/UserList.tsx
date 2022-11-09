import React from "react";
import "../css/User/UserList.css";
import { Card } from "react-bootstrap";
import User from "../../Entities/Users";

const UserList = (props: any) => {
  const userFilter = props.items.filter((obj : User) => {
    return obj.name.toLowerCase().includes(props.selectedUser.toString().toLowerCase());
  });

  console.log(userFilter)

  return (
    <div className="userlist__container">
      <div className="userlist__items">
      {userFilter.map((user: User) => {
        return (
          <Card key={user.id} border="info" className="userlist text-center">
            <Card.Header>{user.username}</Card.Header>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <b>E-mail:</b> {user.email}<br/>
                <b>Phone number:</b> {user.phone}<br/>
                <b>Website: </b>{user.website}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      </div>
      
    </div>
  );
};

export default UserList;
