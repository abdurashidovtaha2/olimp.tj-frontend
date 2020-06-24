import { ActionTypes } from "..";
import { IUser } from "../../reducers/user/model";

export interface IAddUserDetails {
    type: ActionTypes.ADD_USER_DETAILS,
    payload: {
        token: string,
        user: IUser
    }
}