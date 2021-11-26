import React, { useEffect } from 'react'
import { Footer } from "../components"
import { useCardDisplayed } from '../components/context/CardDisplayedContext'
import { useSelected } from '../components/context/PageContext'
import { useTopic } from "../components/context/TopicContext"

export default function FooterContainer() {
    const {selected} = useSelected()
    const {flashcards} = useTopic()
    const {setCardDisplayed} = useCardDisplayed()
    let {cardDisplayed} = useCardDisplayed()

    const prevQuestion = () => {
        setCardDisplayed(cardDisplayed - 1)
    }

    const nextQuestion = () => {
        setCardDisplayed(cardDisplayed + 1)
    }

    useEffect(() => {
        setCardDisplayed(1)
    }, [flashcards])

    return (
        selected === "testYourself" ? 
        <Footer 
            display="flex"
            direction="row"
            justifyContent="space-around"
        >
            <Footer.Button 
                onClick={prevQuestion}
                disabled={cardDisplayed === 1}
            >
                Previous Question
            </Footer.Button>
            <Footer.Button 
                onClick={nextQuestion} 
                disabled={flashcards.length < 1 || cardDisplayed === flashcards.length}
            >
                Next Question
            </Footer.Button>
        </Footer>
        :
        <Footer>
            <Footer.Button
                lineHeight="normal"
                form={"myForm"}
                type={"submit"}
            >
                Add Question
            </Footer.Button>
        </Footer>
    )
}