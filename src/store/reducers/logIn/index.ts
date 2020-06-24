import { ILogInState } from "./model";
import { Reducer } from "redux";
import { ActionTypes } from "../../actions";
import { LogInActions } from "../../actions/logIn/model";

const initialState: ILogInState = {
    loading: false,
    error: null,
    login: "",
    password: "",
    admin: false
}

export const LogInReducer: Reducer<ILogInState, LogInActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_FIELD_CHANGE:
            const { field, value, admin } = action.payload;
            return { ...state, [field]: value, admin };
        case ActionTypes.DO_LOGIN_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.DO_LOGIN_FAILURE:
            const { error } = action.payload
            return { ...state, loading: false, error };
        case ActionTypes.DO_LOGIN_SUCCESS:
            return { ...state, loading: false };
        default:
            return state;
    }
}