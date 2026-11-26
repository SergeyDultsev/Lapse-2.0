import type { IUser } from "@modules/users/model/IUser.ts";
import type {IResponse} from "@shared/IResponse.ts";

// TODO: Сделать кастомный FETCH
export const useUserApi = () => {

    const getUserById = async (userId: string) => {
        const baseUrl = import.meta.env.VITE_API_URL;

        const response  = await fetch(`${baseUrl}/users/${userId}`, {
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

    const getRecommendation = async (userId?: string | null, signal?: AbortSignal) => {
        const baseUrl = import.meta.env.VITE_API_URL;
        const url = userId
            ? `${baseUrl}/users/recommendation/${userId}`
            : `${baseUrl}/users/recommendation`;

        const response  = await fetch(url, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            signal: signal,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users: IResponse<IUser[]> = await response.json();

        return users.data;
    }

    const getSearch = async (query: string, signal?: AbortSignal) => {
        const baseUrl = import.meta.env.VITE_API_URL;

        const response  = await fetch(`${baseUrl}/users/?search=${query}`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            signal: signal,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users: IResponse<IUser[]> = await response.json();

        return users.data;
    }

    return {
        getUserById,
        getRecommendation,
        getSearch,
    }
}