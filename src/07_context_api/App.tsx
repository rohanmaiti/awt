// to avoid the syntax of <UserContext.Provider value=... and so on what we can do ?
// creating a normal componet with all these logic and wrap it with children component

import { createContext } from "react";
import { Father } from "./Context";
const MyContext = createContext<any | null>(null);
function UserProvider({children}:{children:any}){
    return (
        <MyContext.Provider value="abc">
            {children}
        </MyContext.Provider>
    )
}

// how to use it ?
export default function App(){
    return (
        <UserProvider>
            <Father/>
        </UserProvider>

    )
}