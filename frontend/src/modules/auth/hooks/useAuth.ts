import { useLogin, useLogout, useRegister } from "@modules/auth/model/auth.queries.ts";
import type { ILogin, IRegister } from "@modules/auth/model/IAuth.ts";
import { useState } from "react";
import { authConfig, type tCredentialsForm } from "@modules/auth/config/auth.config.ts";

export const useAuth = (mode?: tCredentialsForm) =>  {
    const loginMutation = useLogin();
    const registerMutation = useRegister();
    const logoutMutation = useLogout();

    const [credentialsForm, setCredentialsForm] = useState<tCredentialsForm | null>(mode ?? null);
    const formConfig = credentialsForm ? authConfig[credentialsForm] : null;

    const [authData, setAuthData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const passwordMatch: boolean = authData.password === authData.repeatPassword;

    const setForm = (fieldName: string, value: string) => {
        setAuthData(prevData => ({ ...prevData, [fieldName]: value }));
    }

    const login = (data: ILogin) => {
        return loginMutation.mutateAsync(data);
    };

    const register = (data: IRegister) => {
        return registerMutation.mutateAsync(data);
    };

    const logout = () => {
        return logoutMutation.mutate();
    };

    return {
        credentialsForm,
        authData,
        passwordMatch,
        formConfig,
        login,
        register,
        logout,
        setCredentialsForm,
        setForm,
    };
}