import { Reducer } from "redux";
import { ITakeTestState } from "./model";
import { ActionTypes } from "../../actions";
import { TakeTestActions } from "../../actions/takeTest/model";
//be careful next time, should have named this testDetails NOT takeTest!
const initialState: ITakeTestState = {
    grade: null,
    items_id: null
}

export const TakeTestReducer: Reducer<ITakeTestState, TakeTestActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TAKE_TEST_FIELD_CHANGE:
            const { field, value } = action.payload;
            return { ...state, [field]: value };
        case ActionTypes.DO_TAKE_TEST:
            return { ...state, grade: null, items_id: null };
        default:
            return { ...state };
    }
}