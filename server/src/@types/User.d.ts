declare interface IUser {
  id?: string;
  username?: string;
  email: string;
  password: string | undefined;
  userRole?: string | undefined;
}
