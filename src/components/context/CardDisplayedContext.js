import React, { useState, useContext } from 'react'

export const CardDisplayedContext = React.createContext()

export function CardDisplayedProvider({ children }) {
    const [cardDisplayed, setCardDisplayed] = useState(1)
    
    return (
        <CardDisplayedContext.Provider 
            value={{cardDisplayed,setCardDisplayed}}
        >
            {children}
        </CardDisplayedContext.Provider>
    )
}

export function useCardDisplayed() {
    return useContext(CardDisplayedContext)
}
