import {User} from '../../../Entities/Users'

export const GET_USERS = 'GET_USERS';

export interface IUsersTypes {
    GET_USERS: {
        users: User[];
    }
}