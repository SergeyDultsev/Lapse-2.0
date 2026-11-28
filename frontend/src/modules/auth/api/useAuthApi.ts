import type { IResponse } from "@shared/interfaces/IResponse.ts";
import type { IUser } from "@modules/users/model/IUser.ts";
import type { ILogin, IRegister} from "@modules/auth/model/IAuth.ts";

// TODO: Сделать кастомный FETCH
export const useAuthApi = () => {

    const register = async (registerData: IRegister) => {
        const baseUrl = import.meta.env.VITE_API_URL;

        const response  = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user: IResponse<IUser> = await response.json();

        return user.data;
    }

    const login = async (loginData: ILogin) => {
        const baseUrl = import.meta.env.VITE_API_URL;

        const response  = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user: IResponse<IUser> = await response.json();

        return user.data;
    }

    const checkAuth = async () => {
        const baseUrl = import.meta.env.VITE_API_URL;

        const response  = await fetch(`${baseUrl}/auth/me`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user: IResponse<IUser> = await response.json();

        return user.data;
    }

    const logout = async () => {
        const baseUrl = import.meta.env.VITE_API_URL;

        const response  = await fetch(`${baseUrl}/auth/logout`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const user: IResponse<IUser> = await response.json();

        return user.data;
    }

    const refreshSession = async () => {
        const baseUrl = import.meta.env.VITE_API_URL;

        const response= await fetch(`${baseUrl}/auth/refresh`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    return {
        register,
        login,
        checkAuth,
        logout,
        refreshSession,
    }
}