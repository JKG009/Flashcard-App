import React from 'react'
import {
    Container,
    Title,
    Selector,
    Answer
} from "./styles/updateQuestion"

export default function UpdateQuestion({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

UpdateQuestion.Title = function UpdateQuestionTitle({children}) {
    return <Title>{children}</Title>
}

UpdateQuestion.Selector = function UpdateQuestionSelector({children, ...restProps}) {
    return <Selector {...restProps}>{children}</Selector>
}

UpdateQuestion.Answer = function UpdateQuestionAnswer({children, ...restProps}) {
    return <Answer {...restProps}></Answer>
}
