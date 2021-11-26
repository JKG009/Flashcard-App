import React from 'react'
import {
    Container,
    Title,
    SideContainer,
    Button
} from "./styles/header"

export default function Header({children}) {
    return <Container>{children}</Container>
}

Header.Title = function HeaderTitle() {
    return <Title >Flashcard WebApp</Title>
}

Header.SideContainer = function HeaderSideContainer({children}) {
    return <SideContainer>{children}</SideContainer>
}

Header.Button = function HeaderButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
