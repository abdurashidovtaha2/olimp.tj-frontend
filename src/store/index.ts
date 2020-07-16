import { ILogInState } from "./reducers/logIn/model";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from 'redux-thunk';
import { ISignUpState } from "./reducers/signUp/model";
import { IUserState } from "./reducers/user/model";
import { IMMTQuestionState } from "./reducers/mmtQuestion/model";
import { ITakeTestState } from "./reducers/takeTest/model";

export interface IRootState {
    readonly logInState: ILogInState;
    readonly signUpState: ISignUpState;
    readonly userState: IUserState;
    readonly mmtQuestionState: IMMTQuestionState;
    readonly takeTestState: ITakeTestState;
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
)

export default store;