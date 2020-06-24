export interface ILogInState {
    loading: boolean;
    error: string | null;
    login: string;
    password: string;
    admin: boolean;
}