export interface CreateUserServiceProps{
    handle: (user: IUser) => Promise<IUser>
}