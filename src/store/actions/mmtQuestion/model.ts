import { ActionTypes } from "..";

export type MMTQuestionActions = IMMTChangeQuestionCategory | IMMTChangeQuestion | IMMTChangeQuestionFilling
                | IMMTSubmitQuestionRequest | IMMTSubmitQuestionFailure | IMMTSubmitQuestionSuccess;

export interface IMMTChangeQuestionCategory {
    type: ActionTypes.MMT_CHANGE_QUESTION_CATEGORY,
    payload: {
        field: string,
        value: number
    }
}

export interface IMMTChangeQuestion {
    type: ActionTypes.MMT_CHANGE_QUESTION,
    payload: {
        quesField: string,
        quesValue: string
    }
}

export interface IMMTChangeQuestionFilling {
    type: ActionTypes.MMT_CHANGE_QUESTION_FILLING,
    payload: {
        category: string,
        fillingField: string,
        fillingValue: string
    }
}

export interface IMMTSubmitQuestionRequest {
    type: ActionTypes.MMT_SUBMIT_QUESTION_REQUEST,
}

export interface IMMTSubmitQuestionFailure {
    type: ActionTypes.MMT_SUBMIT_QUESTION_FAILURE,
    payload: {
        error: string
    }
}

export interface IMMTSubmitQuestionSuccess {
    type: ActionTypes.MMT_SUBMIT_QUESTION_SUCCESS
} 