import { IUserState } from "./model";
import { Reducer } from "redux";
import { ActionTypes } from "../../actions";
import { userFromStorage, tokenFromStorage } from "../../../utils/localStorage";

const token = tokenFromStorage();
const user = userFromStorage();
let admin: boolean = false;
if (user) {
    admin = user.admin
}

const initialState: IUserState = {
    token,
    user: {
        username: "",
        login: "",
        admin,
        school: "",
        town: ""
    }
}

export const UserReducer: Reducer<IUserState, any> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER_DETAILS:
            const { token, user } = action.payload;
            return { ...state, token, user };
        default:
            return state;
    }
}