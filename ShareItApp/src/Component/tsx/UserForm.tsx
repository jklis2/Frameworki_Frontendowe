import React, { FC, useState } from "react";
import "../css/UserForm.css";

interface Props {
  user: string;
  setUser(user: string) : void
}

const UserForm: FC<Props> = (props: any) => {
  const hadleChange = (event: any) => {
    props.setUser(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(props.user);
  };

  return (
    <div className="form-container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <input className="input-search"
          type="text"
          placeholder="Type name of user"
          value={props.user}
          onChange={hadleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default UserForm;
