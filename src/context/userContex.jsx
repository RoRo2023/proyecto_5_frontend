import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default ({ children }) => {

    const [userContex, setUserContext] = useState(null);
    const [tokenContex, setTokenContext] = useState('');

    return (
        <UserContext.Provider
            value={{
                userContex,
                setTokenContext,
                tokenContex,
                setUserContext
            }}
        >
            {
                children
            }
        </UserContext.Provider>
    )

}
