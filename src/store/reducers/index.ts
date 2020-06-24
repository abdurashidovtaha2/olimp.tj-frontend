import { combineReducers } from "redux";
import { LogInReducer } from "./logIn";
import { SignUpReducer } from "./signUp";
import { UserReducer } from "./user";
import { MMTQuestionReducer } from "./mmtQuestion";

export const rootReducer = combineReducers({
    logInState: LogInReducer,
    signUpState: SignUpReducer,
    userState: UserReducer,
    mmtQuestionState: MMTQuestionReducer,
})