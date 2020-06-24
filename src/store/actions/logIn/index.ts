import { ILogInFieldChange, IDoLogInRequest, IDoLogInFailure, IDoLogInSuccess } from "./model";
import { ActionTypes } from "..";
import { Dispatch } from "redux";
import { authUrl } from "../../../shared/api";
import { IRootState } from "../..";
import { addUserDetails } from "../user";
import { tokenToStorage, userToStorage } from "../../../utils/localStorage";
import { IUser } from "../../reducers/user/model";
import history from "../../../history";
import { Routes } from "../../../routes";

export const logInFieldChange = (field: string, value: string, admin: boolean): ILogInFieldChange => {
    return {
        type: ActionTypes.LOGIN_FIELD_CHANGE,
        payload: {
            field,
            value,
            admin
        }
    }
}

export const doLogInRequest = (): IDoLogInRequest => {
    return {
        type: ActionTypes.DO_LOGIN_REQUEST
    }
}

export const doLogInFailure = (error: string): IDoLogInFailure => {
    return {
        type: ActionTypes.DO_LOGIN_FAILURE,
        payload: {
            error
        }
    }
}

export const doLogInSuccess = (): IDoLogInSuccess => {
    return {
        type: ActionTypes.DO_LOGIN_SUCCESS,
    }
}

export const doLogIn = () => async (dispatch: Dispatch<any>, getState: () => IRootState) => {
    dispatch(doLogInRequest());
    try {
        const { login, password, admin } = getState().logInState;
        const user: IUser = {
            username: "dog",
            login,
            admin,
            school: "",
            town: ""
        }
        const body = JSON.stringify({ login, password });
        let url: string = "";
        if (admin) {
            url = "/admin/token";
        } else {
            url = "/student/token";
        }
        const response = await fetch(`${authUrl}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        });
        const answer = await response.json();
        const { token } = await answer;
        if (!token) {
            throw new Error("error occured");
        }
        dispatch(doLogInSuccess());
        dispatch(addUserDetails(token, user));
        tokenToStorage(token);
        userToStorage(user);
        history.push(Routes.root);
        alert(`hello ${user.login}`);
    } catch (error) {
        alert("wrong login or password");
        dispatch(doLogInFailure(error));
    }
}

// export const doLogIn = () => async (dispatch: Dispatch<any>, getState: () => IRootState) => {
//     dispatch(doLogInRequest());
//     try {
//         const { login, password, admin } = getState().logInState;
//         const body = JSON.stringify({ login, password });
//         const response = await fetch(`${authUrl}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body
//         });
//         const { token } = await response.json();
//         history.push(Routes.root);
//         alert("alkfdja;sdf");
//     } catch (error) {
//         alert("wrong login or password")
//         dispatch(doLogInFailure(error));
//     }
// }