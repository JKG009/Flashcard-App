import React, { useState, useContext } from 'react'

export const SubmitContext = React.createContext()

export function SubmitProvider({ children }) {
    const [submitted, setSubmitted] = useState(false)
    
    return (
        <SubmitContext.Provider
            value={{submitted, setSubmitted}}
        >
            {children}
        </SubmitContext.Provider>
    )
}

export function useSubmit() {
    return useContext(SubmitContext)
}