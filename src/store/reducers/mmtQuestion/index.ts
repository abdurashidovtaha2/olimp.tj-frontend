import { Reducer } from "redux"
import { IMMTQuestionState } from "./model";
import { ActionTypes } from "../../actions";
import { MMTQuestionActions } from "../../actions/mmtQuestion/model";

const initialState: IMMTQuestionState = {
    test: 0,
    grade: 0,
    items_id: 0,
    tests: {},
    loading: false,
    error: null
}

export const MMTQuestionReducer: Reducer<IMMTQuestionState, MMTQuestionActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.MMT_CHANGE_QUESTION_CATEGORY:
            const { field, value } = action.payload;
            return { ...state, [field]: value, tests: {} };
        case ActionTypes.MMT_CHANGE_QUESTION:
            const { quesField, quesValue } = action.payload;
            return { ...state, tests: { ...state.tests, [quesField]: quesValue } };
        case ActionTypes.MMT_CHANGE_QUESTION_FILLING:
            const { category, fillingField, fillingValue } = action.payload;
            return { ...state, tests: 
                        { ...state.tests, [category]: 
                            { ...state.tests[category], [fillingField]: fillingValue } } }
        case ActionTypes.MMT_SUBMIT_QUESTION_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.MMT_SUBMIT_QUESTION_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case ActionTypes.MMT_SUBMIT_QUESTION_SUCCESS:
            return { ...state, tests: {}, loading: false };
        default:
            return state;
    }
}