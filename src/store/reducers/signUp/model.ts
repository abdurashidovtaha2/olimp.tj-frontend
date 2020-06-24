export interface ISignUpState {
    loading: boolean;
    error: string | null;
    username: string;
    login: string;
    password: string;
    admin: boolean;
    school: string;
    town: string;
}