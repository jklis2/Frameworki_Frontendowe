import React from "react";

const UserList = (props: any) => {
  return (
    <div>
      <div>
        {props.items.map((user: any) => {
          return (
            <div key={user.id}>
              {user.name} {user.username}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
