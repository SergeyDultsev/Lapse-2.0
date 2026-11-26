export interface IUser {
    userId: string,
    username: string,
    email: string,
    bio: string,
    avatarUrl: string,
    meta: {
        countFollowers: number,
        countSubscriptions: number,
        countPosts: number,
        createdAt: Date,
        updatedAt: Date,
    }
}