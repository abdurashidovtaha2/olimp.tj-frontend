import { ITakeTestFieldChange, IDoTakeTest } from "./model";
import { ActionTypes } from "..";

export const takeTestFieldChange = (field: string, value: number): ITakeTestFieldChange => {
    return {
        type: ActionTypes.TAKE_TEST_FIELD_CHANGE,
        payload: {
            field,
            value
        }
    }
}

export const doTakeTest = (): IDoTakeTest => {
    return {
        type: ActionTypes.DO_TAKE_TEST
    }
}