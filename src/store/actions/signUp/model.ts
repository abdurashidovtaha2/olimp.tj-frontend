import { ActionTypes } from "..";

export interface ISignUpFieldChange {
    type: ActionTypes.SIGNUP_FIELD_CHANGE
    payload: {
        field: string,
        value: string
    }
}

export interface IDoSignUpRequest {
    type: ActionTypes.DO_SIGNUP_REQUEST,
}

export interface IDoSignUpFailure {
    type: ActionTypes.DO_SIGNUP_FAILURE,
    payload: {
        error: string
    }
}

export interface IDoSignUpSuccess {
    type: ActionTypes.DO_SIGNUP_SUCCESS,
}