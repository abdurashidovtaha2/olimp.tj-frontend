import { IAddUserDetails } from "./model";
import { ActionTypes } from "..";
import { IUser } from "../../reducers/user/model";

export const addUserDetails = (token: string, user: IUser): IAddUserDetails => {
    return {
        type: ActionTypes.ADD_USER_DETAILS,
        payload: {
            token,
            user
        }
    }
}