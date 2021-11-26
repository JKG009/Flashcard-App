import React, { useState, useEffect } from 'react'
import { Content } from "../components"
import { useTopic } from "../components/context/TopicContext"
import { useCardDisplayed } from '../components/context/CardDisplayedContext'

export default function ContentContainer() {
    const {setFlashcards, topics} = useTopic()
    const {cardDisplayed, setCardDisplayed} = useCardDisplayed()
    
    const [selectedTopic, setSelectedTopic] = useState("")
    const [flip, setFlip] = useState(false)

    let renderedFlashcards = JSON.parse(localStorage.getItem(selectedTopic)) || []

    const handleClick = (n) => {
        setCardDisplayed(n)
    }
    const deleteTopicClick = () => {
        if (selectedTopic) {
            localStorage.removeItem(selectedTopic)
            document.location.reload(true)
        }
    }

    useEffect(() => {
        setFlashcards(renderedFlashcards)
    }, [selectedTopic])

    useEffect(() => {
        setFlip(false)
    }, [cardDisplayed])

    return (
        <Content 
            justifyContent={selectedTopic ? "space-around" : null}
        >
            {selectedTopic ? 
                null 
                :
                <h3 style={{marginBottom: "30px"}}>
                    Created by Geoffrey Lee
                </h3>
            }
            <Content.TopicContainer>
                <Content.Topic>Select Your Topic:</Content.Topic>
                <Content.Dropdown
                    onChange={(event) => {
                        setSelectedTopic(event.target.value)
                        setFlip(false)
                    }}
                >
                    <option value="" hidden>Select your topic</option>
                    {topics.map((topic, index) => (
                        <option key={index} value={topic}>
                            {topic}
                        </option>))
                    }
                </Content.Dropdown>
                <Content.Close 
                    onClick={deleteTopicClick}
                >
                    &#215;<span className="tooltiptext">Delete selected topic</span>
                </Content.Close>
            </Content.TopicContainer>
            {selectedTopic ? 
                <>
                    <Content.FlashcardContainer>
                    {renderedFlashcards.map((flashcard, index) => (cardDisplayed === (index + 1) && 
                        <Content.Flashcard 
                            deleteCard={() => {
                                let flashcardsFromStorage = JSON.parse(localStorage.getItem(selectedTopic))
                                flashcardsFromStorage.splice(index, 1)
                                localStorage.setItem(selectedTopic, JSON.stringify(flashcardsFromStorage))
                                if (index === renderedFlashcards.length - 1) {
                                    setCardDisplayed(cardDisplayed - 1)
                                }
                            }}
                            onClick={() => setFlip(!flip)}
                            flip={flip} 
                            key={index + 1}
                            flashcard={flashcard}
                            >
                            </Content.Flashcard>
                    ))}
                    </Content.FlashcardContainer>
                    <Content.FlashcardDotContainer>
                        {renderedFlashcards.map((flashcard, index) => 
                        (cardDisplayed === (index + 1) ? 
                        <Content.FlashcardDot 
                            className="active" 
                            key={index + 1}>
                        </Content.FlashcardDot> 
                        :
                        <Content.FlashcardDot 
                            key={index + 1}
                            onClick={() => handleClick(index + 1)}>
                        </Content.FlashcardDot>)
                        )}
                    </Content.FlashcardDotContainer>
                </> : null}
        </Content>
    )
}
