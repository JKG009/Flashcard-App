import React, { useState, useContext } from "react";

export const PageContext = React.createContext()

export function PageProvider({ children }) {
    const [selected, setSelected] = useState("testYourself")

    return (
        <PageContext.Provider
            value={{selected, setSelected}}
        >
            {children}
        </PageContext.Provider>
    )
}

export function useSelected() {
    return useContext(PageContext)
}