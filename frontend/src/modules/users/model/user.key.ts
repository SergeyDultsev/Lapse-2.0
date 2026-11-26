export const userKeys = {
    all: ['users'] as const,
    user: (id?: string) => [...userKeys.all, 'user', id],
    search: (query?: string) => [...userKeys.all, 'search', query],
    subscribe: () => [...userKeys.all, 'subscribe'],
    recommendation: (id?: string) => [...userKeys.all, 'recommendation', id],
};