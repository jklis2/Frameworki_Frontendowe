import { Dispatch } from "redux";
import * as actionTypes from './actionTypes/usersTypes'
import {User} from "../../Entities/Users"
import { IState } from "../Reducers";

interface singleUser {
    userName: string
}
export const getUsers = (userName?: string) => ((dispatch: Dispatch, getState: () => IState)=> {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users: User[]) => {
        dispatch({
            type: actionTypes.GET_USERS,
            users,
        });
        return users.slice(0,1);
    })
})  as any
