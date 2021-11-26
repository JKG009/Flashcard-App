import React, { useState, useContext } from "react"

export const TopicContext = React.createContext()

export function TopicProvider({children}) {
    const [flashcards, setFlashcards] = useState([])
    const [topics, setTopics] = useState(Object.keys(localStorage))
    
    return (
        <TopicContext.Provider 
            value={{flashcards, topics, setTopics, setFlashcards}}
        >
            {children}
        </TopicContext.Provider>
    )
}

export function useTopic() {
    return useContext(TopicContext)
}