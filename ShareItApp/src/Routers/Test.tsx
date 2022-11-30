import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../Redux/Reducers";
import { IUsersReducer } from "../Redux/Reducers/usersReducer";
import { getUsers } from "../Redux/actions/userActions";
import {Button} from "../styleHelpers/button";

type GetUsers = ReturnType<typeof getUsers>;

export const Test: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, [dispatch]);

  const { users, currentUser } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));




  return (
    <>
    <div>
        <Button>123</Button>
    </div>
    {console.log(currentUser)}
      {users?.map((user) => {
        return (
          <div>
            {user.name} {user.username}
          </div>
        );
      })}
    </>
  );
};
