import { ILogInState } from "./reducers/logIn/model";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from 'redux-thunk';
import { ISignUpState } from "./reducers/signUp/model";
import { IUserState } from "./reducers/user/model";
import { IMMTQuestionState } from "./reducers/mmtQuestion/model";

export interface IRootState {
    readonly logInState: ILogInState;
    readonly signUpState: ISignUpState;
    readonly userState: IUserState;
    readonly mmtQuestionState: IMMTQuestionState;
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
)

export default store;