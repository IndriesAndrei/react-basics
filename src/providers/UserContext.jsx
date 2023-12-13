import { createContext, useContext, useState } from "react";

// the User context
const UserContext = createContext(undefined);

//the provider (context provider)
const UserProvider = ({children}) => {
    const [user] = useState({
        name: "John",
        email: "john@example.com",
        dob: "01/01/2000",
    });

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>);
};

// components to wire to the context (custom hook here)
export const useUser = () => useContext(UserContext);

export default UserProvider;