import React from 'react'
import {
    Container,
    TopicContainer,
    Topic,
    Dropdown,
    Close,
    FlashcardContainer,
    Flashcard,
    FlashcardFront,
    FlashcardBack,
    FlashcardDot,
    FlashcardDotContainer
} from "./styles/content"


export default function Content({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Content.TopicContainer = function ContentTopicContainer({children}) {
    return <TopicContainer>{children}</TopicContainer>
}

Content.Topic = function ContentTopic({children}) {
    return <Topic>{children}</Topic>
}

Content.Dropdown = function ContentDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Content.Close = function ContentClose({children, ...restProps}) {
    return <Close {...restProps}>{children}</Close>
}

Content.FlashcardContainer = function ContentFlashcardContainer({children}) {
    return <FlashcardContainer>{children}</FlashcardContainer>
}

Content.Flashcard = function ContentFlashcard({ flip, onClick, flashcard, deleteCard}) {
    return (
        <Flashcard flip={flip} onClick={onClick}>
            <FlashcardFront>{flashcard.question}</FlashcardFront>
            <FlashcardBack>
                {flashcard.answer}
                <span className="deleteCard" onClick={deleteCard}>
                    &#215;
                </span><span className="deleteCardText">Delete this flashcard</span>
            </FlashcardBack>
        </Flashcard>
    )
}

Content.FlashcardDotContainer = function ContentFlashcardDotContainer({children}) {
    return (
        <FlashcardDotContainer >{children}</FlashcardDotContainer>
    )
}

Content.FlashcardDot = function ContentFlashcardDot({...restProps}) {
    return (
        <FlashcardDot {...restProps}></FlashcardDot>
    )
}