export interface IUserState {
    token: string | null;
    user: IUser;
}

export interface IUser {
    username: string;
    login: string;
    admin: boolean;
    school: string;
    town: string;
}