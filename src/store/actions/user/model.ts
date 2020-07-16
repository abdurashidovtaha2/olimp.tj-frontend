import { ActionTypes } from "..";
import { IUser } from "../../reducers/user/model";

export type UserActions = IAddUserDetails | IDoLogOut;

export interface IAddUserDetails {
    type: ActionTypes.ADD_USER_DETAILS,
    payload: {
        token: string,
        user: IUser
    }
}

export interface IDoLogOut {
    type: ActionTypes.DO_LOGOUT,
}