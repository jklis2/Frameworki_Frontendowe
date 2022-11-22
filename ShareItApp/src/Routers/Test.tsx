import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../Redux/Reducers";
import { IUsersReducer } from "../Redux/Reducers/usersReducer";
import { getUsers } from "../Redux/actions/userActions";

type GetUsers = ReturnType<typeof getUsers>

export const Test : FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers())
    }, [dispatch])

    const {users} = useSelector<IState, IUsersReducer>((state) => ({
         ...state.users
     }));

    return (
        <>
         {/* {console.log(users)}  */}
         {users?.map((user) => {
             return (
                 <div>{user.name} {user.username}</div>

             );
         })} 
        </>
    )
}