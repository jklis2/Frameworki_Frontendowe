import React from "react";
import "../css/UserList.css";
import { Card } from "react-bootstrap";

const UserList = (props: any) => {
  return (
    <div className="d-flex flex-wrap">    
        {props.items.map((user: any) => {
          return (
            <Card key={user.id} border="info" className="list text-center">
              <Card.Header>{user.username}</Card.Header>
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    Info about user
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
     
    </div>
  );
};

export default UserList;
