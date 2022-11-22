import * as actionTypes from '../actions/actionTypes/usersTypes'
import {User} from '../../Entities/Users'

export interface IUsersReducer {
    users: User[]
}

const defaultState = (): IUsersReducer => ({
    users: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch(action.type){
        case actionTypes.GET_USERS: {
            const payload: actionTypes.IUsersTypes['GET_USERS'] = action;
            return {
                ...state, 
                users: payload.users,
            };
        }
        default:{
            return state;
        }
    }
};