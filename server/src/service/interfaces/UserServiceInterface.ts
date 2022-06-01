export interface UserServiceProps {
  handle: (user: IUser) => Promise<IUser | null>;
}
