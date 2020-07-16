import { IUserState } from "./model";
import { Reducer } from "redux";
import { ActionTypes } from "../../actions";
import { userFromStorage, tokenFromStorage } from "../../../utils/localStorage";
import { UserActions } from "../../actions/user/model";

const token = tokenFromStorage();
const user = userFromStorage(); 

const initialState: IUserState = {
    token: "token",
    user: {
        username: user?.username || "aerobic",
        login: user?.login || "",
        admin: user?.admin || false,
        school: user?.school || "",
        town: user?.town || ""
    }
}

export const UserReducer: Reducer<IUserState, UserActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER_DETAILS:
            const { token, user } = action.payload;
            return { ...state, token, user };
        case ActionTypes.DO_LOGOUT:
            return { token: null, user: { username: "", login: "", admin: false, school: "", town: "" } };
        default:
            return state;
    }
}