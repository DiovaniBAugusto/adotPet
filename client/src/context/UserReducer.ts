import { UserContextProps, contextProps } from "./interface/context-interface";

type actionProps =
  | { type: "login"; payload: UserContextProps }
  | { type: "logout"; payload: null };

export const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    default:
      return state;
  }
};
