import { Password } from "phosphor-react";
import { createContext, ReactNode } from "react";

interface userProps {
    username: string;
    password: string;
}

export interface AuthContextDataProps {
    user: userProps;
    // isUserLoading: boolean;
    singIn: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

    async function singIn(){
        console.log("LOGA IA PAPAI")
    }

    return (
        <AuthContext.Provider value={{
            singIn,
            user: {
                username: 'jobsferri',
                password: '12345678'
                
            }
        }}>
            { children }
        </AuthContext.Provider>
    )
}