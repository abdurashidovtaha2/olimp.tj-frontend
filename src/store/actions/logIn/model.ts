import { ActionTypes } from "..";

export type LogInActions = ILogInFieldChange | IDoLogInRequest | IDoLogInFailure | IDoLogInSuccess;

export interface ILogInFieldChange {
    type: ActionTypes.LOGIN_FIELD_CHANGE,
    payload: {
        field: string,
        value: string,
        admin: boolean
    }
}

export interface IDoLogInRequest {
    type: ActionTypes.DO_LOGIN_REQUEST,
}

export interface IDoLogInFailure {
    type: ActionTypes.DO_LOGIN_FAILURE,
    payload: {
        error: string
    }
}

export interface IDoLogInSuccess {
    type: ActionTypes.DO_LOGIN_SUCCESS,
}