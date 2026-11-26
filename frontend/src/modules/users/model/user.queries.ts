import { useQuery } from '@tanstack/react-query';
import { userKeys } from './user.key';
import { useUserApi } from "@modules/users/api/useUserApi.ts";

export const useUser = (id: string) => {
    const { getUserById } = useUserApi();

    return useQuery({
        queryKey: userKeys.user(id),
        queryFn: () => getUserById(id),
        enabled: !!id,
    });
};

export const useUsersRecommendation = (id?: string | null) => {
    const { getRecommendation } = useUserApi();

    return useQuery({
        queryKey: userKeys.recommendation(id ?? undefined),
        queryFn: ({ signal }) => getRecommendation(id, signal),
    });
};

export const useUsersSearch = (query?: string) => {
    const { getSearch } = useUserApi();

    return useQuery({
        queryKey: userKeys.search(query),
        queryFn: ({ signal }) => getSearch(query, signal),
    });
};