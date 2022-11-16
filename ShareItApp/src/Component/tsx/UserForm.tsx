import React, { FC } from "react";
import "../css/User/UserForm.css";

interface Props {
  user: string;
  setUser(user: string) : void
}
let nameFromForm = '';

const UserForm: FC<Props> = (Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)  : void => {
    nameFromForm = event.target.value;
    Props.setUser(nameFromForm);
  };

  const handleSubmit = (event: React.SyntheticEvent) : void => {
    event.preventDefault();
  };

  return (
    <div className="form-container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <input className="input-search"
          type="text"
          placeholder="Type name of user"
          value={Props.user}
          onChange={handleChange}
        ></input>
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
};

export default UserForm;
