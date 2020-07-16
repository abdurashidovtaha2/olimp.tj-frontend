import { ActionTypes } from "..";

export type TakeTestActions = ITakeTestFieldChange | IDoTakeTest;

export interface ITakeTestFieldChange  {
    type: ActionTypes.TAKE_TEST_FIELD_CHANGE,
    payload: {
        field: string;
        value: number;
    }
}

export interface IDoTakeTest {
    type: ActionTypes.DO_TAKE_TEST,
}