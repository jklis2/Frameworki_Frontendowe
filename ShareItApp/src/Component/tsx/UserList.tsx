import React from "react";
import "../css/User/UserList.css";
import { Card } from "react-bootstrap";
import {User} from "../../Entities/Users";

const UserList = (props: any) => {
  const userFilter = props.items.filter((obj : User) => {
    return obj.name.toLowerCase().includes(props.selectedUser.toString().toLowerCase());
  });

  return (
    <div className="userlist__container">
      <div className="userlist__items">
      {userFilter.map((user: User) => {
        return (
          <Card key={user.id} border="info" className="userlist text-center">
            <Card.Header>{user.username}</Card.Header>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <hr></hr> 
              <Card.Text>
                <b>E-mail:</b> {user.email}<br/>
                <b>Address:</b> <br/>
                <b>Street:</b> {user.address.street}<br/>
                <b>Suite:</b> {user.address.suite}<br/>
                <b>City:</b> {user.address.city}<br/>
                <b>Zipcode:</b> {user.address.zipcode}<br/>
                <b>Geo LAT:</b> {user.address.geo.lat}<br/>
                <b>Geo LNG:</b> {user.address.geo.lng}<br/>
                <b>Phone number:</b> {user.phone}<br/>
                <b>Website: </b>{user.website}<br/>
                <b>Company</b> <br/>
                <b>Company name: </b>{user.company.name}<br/>
                <b>Company catch phrase: </b>{user.company.catchPhrase}<br/>
                <b>Company bs: </b>{user.company.bs}<br/>
                

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
