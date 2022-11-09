import React, { FC } from "react";
import "../css/User/UserForm.css";

interface Props {
  user: string;
  setUser(user: string) : void
}
let nameFromForm = '';

const UserForm: FC<Props> = (props: any) => {
    const handleChange = (event: any) => {
    nameFromForm = event.target.value;
    props.setUser(nameFromForm);
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    // props.setUser(nameFromForm);
  };


  return (
    <div className="form-container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <input className="input-search"
          type="text"
          placeholder="Type name of user"
          value={props.user}
          onChange={handleChange}
        ></input>
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
};

export default UserForm;
