import { IAddUserDetails, IDoLogOut } from "./model";
import { ActionTypes } from "..";
import { IUser } from "../../reducers/user/model";
import { clearStorage } from "../../../utils/localStorage";

export const addUserDetails = (token: string, user: IUser): IAddUserDetails => {
    return {
        type: ActionTypes.ADD_USER_DETAILS,
        payload: {
            token,
            user
        }
    }
}

export const doLogOut = (): IDoLogOut => {
    clearStorage();
    return {
        type: ActionTypes.DO_LOGOUT
    }
}