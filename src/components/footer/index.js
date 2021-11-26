import React from 'react'
import {
    Container,
    Button
} from "./styles/footer"

export default function Footer({children , ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Button = function FooterButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}