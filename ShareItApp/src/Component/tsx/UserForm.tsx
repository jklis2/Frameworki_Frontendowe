import React, { FC, useState } from "react";

const UserForm: FC = (props : any) => {
  const [user, setUser] = useState('');

  const hadleChange = (event : any) => {
        console.log(event.target.value)
        setUser(event.target.value)
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(user)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type name of user" value={user} onChange={hadleChange}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default UserForm;
