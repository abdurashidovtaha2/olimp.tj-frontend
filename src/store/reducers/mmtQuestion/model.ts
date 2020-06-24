export interface IMMTQuestionState {
    test: number;
    grade: number;
    items_id: number;
    tests: any | IMMTTestState | IMMTStraightState | IMMTMatchingState | IMMTFillingState;
    loading: boolean;
    error: string | null;
}

export interface IMMTTestState {
    question: string;
    answer: string;
    a: string;
    b: string;
    c: string;
    d: string;
}

export interface IMMTStraightState {
    question: string;
    answer: string;
}

export interface IMMTMatchingState {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    ans_A: string;
    ans_B: string;
    ans_C: string;
    ans_D: string
}

export interface IMMTFillingState {
    question: string;
    one: IMMTTestState;
    two: IMMTTestState;
    three: IMMTTestState;
    four: IMMTTestState;
    five: IMMTTestState;
    six: IMMTTestState;
    seven: IMMTTestState;
    eight: IMMTTestState;
}