import React from 'react'
import { Header } from '../components'
import { useSelected } from "../components/context/PageContext"

export default function HeaderContainer() {
    const {selected, setSelected} = useSelected()
    return (
        <Header>
            <Header.Title />
            <Header.SideContainer>
                <Header.Button 
                    active={selected === "testYourself" ? true : false}
                    onClick={() => {setSelected("testYourself")}}
                >
                    Test Yourself
                </Header.Button>
                <Header.Button
                    active={selected === "makeCards" ? true : false}
                    onClick={() => {setSelected("makeCards")}}
                >
                    Make Cards
                </Header.Button>
            </Header.SideContainer>
        </Header>
    )
}
