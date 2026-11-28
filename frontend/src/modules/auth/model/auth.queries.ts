import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authKey } from './auth.key';
import { useAuthApi } from "@modules/auth/api/useAuthApi.ts";

export const useLogin = () => {
    const queryClient = useQueryClient();

    const { login } = useAuthApi();

    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: authKey.me(),
            });
        },
    });
};

export const useRegister  = () => {
    const queryClient = useQueryClient();

    const { register } = useAuthApi();

    return useMutation({
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: authKey.me(),
            });
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    const { logout } = useAuthApi();

    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.clear();
        },
    });
};

export const useMe = () => {
    const { checkAuth } = useAuthApi();

    return useQuery({
        queryKey: authKey.me(),
        queryFn: checkAuth,
        staleTime: 15 * 60 * 1000,
        retry: false,
    });
};