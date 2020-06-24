import { IUser } from "../../store/reducers/user/model";

const USER_KEY = "user";
const TOKEN_KEY = "token";

export const tokenToStorage = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const userToStorage = (user: IUser): void => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export const clearStorage = (): void => {
    localStorage.clear();
}

export const tokenFromStorage = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
}

export const userFromStorage = (): IUser | null => {
    try {
        const data = localStorage.getItem(USER_KEY);
        if (data === null) {
            return null;
        }
        const user = JSON.parse(data);
        return user as IUser;
    } catch (error) {
        return null;
    }
}