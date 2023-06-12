import React, { createContext, useState } from "react";

export const CatalogContext = createContext();

export default ({ children }) => {

    const [totalContex, setTotalContext] = useState(0);
    const [carritoContex, setCarritoContext] = useState([]);

    return (
        <CatalogContext.Provider
            value={{
                totalContex,
                setTotalContext,
                carritoContex,
                setCarritoContext
            }}
        >
            {
                children
            }
        </CatalogContext.Provider>
    )
}