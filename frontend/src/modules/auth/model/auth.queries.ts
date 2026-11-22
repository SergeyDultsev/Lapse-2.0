import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authKey } from './auth.key';

export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: authKey.me(),
            });
        },
    });
};

export const useRegister  = () => {
    const queryClient = useQueryClient();

    return useMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: authKey.me(),
            });
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        onSuccess: () => {
            queryClient.clear();
        },
    });
};

export const useMe = () => {
    return useQuery({
        queryKey: authKey.me(),
        staleTime: 1000 * 60 * 1000,
        retry: false,
    });
};