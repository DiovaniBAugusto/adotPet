import { createContext } from "react"
import { UserContextProps } from "./interface/context-interface";


export type createContextProps={
    user: UserContextProps
}

export const UserContext = createContext<any>({});