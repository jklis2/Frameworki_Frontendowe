import React, { FC } from "react";
import { getUsers } from "../../Redux/actions/userActions"
import "../css/EditProfile.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../Redux/Reducers";
import { IUsersReducer } from "../../Redux/Reducers/usersReducer";

type GetUsers = ReturnType<typeof getUsers>;

const EditProfileForm: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, [dispatch]);

  const {currentUser } = useSelector<IState, IUsersReducer>(
    (state) => ({
      ...state.users,
    })
  );
  const name = "Evan"

  console.log(currentUser)
  if(currentUser !== undefined) currentUser.name = name;

  return (
    <div className="register">
      <div className="container">
        <div className="form sign-up-container">
          <form action="#">
            <div className="register-form">
              <div className="sign-up-text">
                {/* S U */}
                <h1> Edit profile </h1>
              </div>
              <div className="data-container">
                <div className="personal">
                  <div className="personal-text">
                    <h2>User information</h2>
                    {/* U I */}
                  </div>
                  <div className="personal-form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Surname" />
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="User Email" />
                    <input type="text" placeholder="Phone" />
                  </div>
                </div>
                <div className="address">
                  <div className="address-text">
                    <h2>User address</h2>
                    {/* U A */}
                  </div>
                  <div className="address-form">
                    <input type="text" placeholder="Street" />
                    <input type="text" placeholder="Suite" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Zipcode" />
                  </div>
                  <a href="/Dashboard">Reject</a>
                </div>
                <div className="company">
                  <div className="company-text">
                    <h2>User company</h2>
                  </div>
                  <div className="company-form">
                    <input type="text" placeholder="Website" />
                    <input type="text" placeholder="Company Name" />
                    <input type="text" placeholder="Catch Phrase" />
                    <input type="text" placeholder="Bs" />
                  </div>
                  <a href="/Dashboard">Save changes</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileForm;