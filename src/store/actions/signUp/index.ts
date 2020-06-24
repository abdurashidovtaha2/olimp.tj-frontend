import { ISignUpFieldChange, IDoSignUpRequest, IDoSignUpFailure, IDoSignUpSuccess } from "./model";
import { ActionTypes } from "..";
import { Dispatch } from "redux";
import { IRootState } from "../..";
import { authUrl } from "../../../shared/api";
import history from "../../../history";
import { Routes } from "../../../routes";

export const signUpFieldChange = (field: string, value: string): ISignUpFieldChange => {
    return {
        type: ActionTypes.SIGNUP_FIELD_CHANGE,
        payload: {
            field,
            value
        }
    }
}

export const doSignUpRequest = (): IDoSignUpRequest => {
    return {
        type: ActionTypes.DO_SIGNUP_REQUEST
    }
}

export const doSignUpFailure = (error: string): IDoSignUpFailure => {
    return {
        type: ActionTypes.DO_SIGNUP_FAILURE,
        payload: {
            error
        }
    }
}

export const doSignUpSuccess = (): IDoSignUpSuccess => {
    return {
        type: ActionTypes.DO_SIGNUP_SUCCESS
    }
}

export const doSignUp = () => async (dispatch: Dispatch<any>, getState: () => IRootState) => {
    dispatch(doSignUpRequest());
    try {
        const { username, login, password, school, town } = getState().signUpState;
        const body = JSON.stringify({ username, login, password, school, town });
        const response = await fetch(`${authUrl}/new/student`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        });
        const answer = await response.json();
        const { code } = answer;
        if (code !== 200) {
            throw new Error("error occured");
        }
        dispatch(doSignUpSuccess());
        history.push(Routes.root);
        alert("Шумо аккаунт сохтен, акун ба хамун аккаунт логин кунед!");
    } catch (error) {
        alert(error);
        dispatch(doSignUpFailure(error));
    }
}