import React, { createContext, useState } from "react";

export const CatalogContext = createContext();

export default ({ children }) => {

    const [catalogContex, setCatalogContext] = useState([]);
    const [carritoContex, setCarritoContext] = useState([]);

    return (
        <CatalogContext.Provider
            value={{
                catalogContex,
                setCatalogContext,
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