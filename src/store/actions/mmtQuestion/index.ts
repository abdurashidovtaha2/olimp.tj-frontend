import { IMMTChangeQuestionCategory, IMMTChangeQuestion, IMMTChangeQuestionFilling, IMMTSubmitQuestionRequest, IMMTSubmitQuestionFailure, IMMTSubmitQuestionSuccess } from "./model";
import { ActionTypes } from "..";
import { Dispatch } from "redux";
import { IRootState } from "../..";
import { createMMTTestUrl } from "../../../shared/api";

export const MMTChangeQuestionCategory = (field: string, value: number): IMMTChangeQuestionCategory => {
    return {
        type: ActionTypes.MMT_CHANGE_QUESTION_CATEGORY,
        payload: {
            field,
            value
        }
    }
}

export const MMTChangeQuestion = (quesField: string, quesValue: string): IMMTChangeQuestion => {
    return {
        type: ActionTypes.MMT_CHANGE_QUESTION,
        payload: {
            quesField,
            quesValue
        }
    }
}

export const MMTChangeQuestionFilling =
    (category: string, fillingField: string, fillingValue: string): IMMTChangeQuestionFilling => {
        return {
            type: ActionTypes.MMT_CHANGE_QUESTION_FILLING,
            payload: {
                category,
                fillingField,
                fillingValue
            }
        }
    }

const MMTSubmitQuestionRequest = (): IMMTSubmitQuestionRequest => {
    return {
        type: ActionTypes.MMT_SUBMIT_QUESTION_REQUEST
    }
}

const MMTSubmitQuestionFailure = (error: string): IMMTSubmitQuestionFailure => {
    return {
        type: ActionTypes.MMT_SUBMIT_QUESTION_FAILURE,
        payload: {
            error
        }
    }
}

const MMTSubmitQuestionSuccess = (): IMMTSubmitQuestionSuccess => {
    return {
        type: ActionTypes.MMT_SUBMIT_QUESTION_SUCCESS
    }
}

export const MMTSubmitQuestion = () => async (dispatch: Dispatch<any>, getState: () => IRootState) => {
    dispatch(MMTSubmitQuestionRequest());
    try {
        const { test, grade, items_id, tests } = getState().mmtQuestionState;
        const { token } = getState().userState;
        const body = JSON.stringify({ test, grade, items_id, tests });
        const response = await fetch(`${createMMTTestUrl}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body
        });
        const answer = await response.json();
        console.log(answer);
        if (answer.code !== 200) {
            throw new Error("error occured");
        }
        dispatch(MMTSubmitQuestionSuccess());
        alert('савол дохил шуд');
    } catch (error) {
        alert("Кор накард");
        dispatch(MMTSubmitQuestionFailure(error));
    }
}