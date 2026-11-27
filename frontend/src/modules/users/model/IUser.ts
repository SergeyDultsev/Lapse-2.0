export interface IUser {
    userId: string,
    username: string,
    bio: string,
    avatarUrl: string,
    meta: {
        countFollowers: number,
        countSubscriptions: number,
        countPosts: number,
        createdAt: string,
        updatedAt: string,
    }
}