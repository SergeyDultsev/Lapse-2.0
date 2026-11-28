import { useEffect } from 'react';
import { useAuthApi } from "@modules/auth/api/useAuthApi.ts";

export const RefresherProvider = () => {
    const { refreshSession } = useAuthApi();

    useEffect(() => {
        refreshSession();
    }, []);

    return null;
};