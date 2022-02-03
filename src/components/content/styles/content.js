import styled from "styled-components";

export const Container = styled.div`
    background: #6D8A96;
    display: flex;
    flex-direction: column;
    align-items: center; 
    height: 85%;
    justify-content: ${({justifyContent}) => justifyContent && justifyContent};
    min-height: 400px;
`

export const TopicContainer = styled.div`
    display: flex;
    margin-bottom: -2em; 
    align-items: center;
    
    @media (max-width: 800px) {
        margin-bottom: -4em;
    }
`

export const Topic = styled.h2`
    
`

export const Dropdown = styled.select`
    height: fit-content;
    align-self: center;
    padding: 0.5em 1em;
    margin-left: 0.7em;
    border: black solid 2px;
    background: #A8B3C7;
    font-weight: bold;
`

export const Close = styled.div`
    font-size: 1.5em;
    padding: 0.01em 0.3em;
    margin-left: 0.3em;
    border: black 2px solid;
    border-radius: 10%;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    cursor: pointer;
    background: #A8B3C7;
    transition-duration: 0.4s;

    :hover {
        background-color: rgba(168, 179, 199, 0.6);
    }

    .tooltiptext {
        visibility: hidden;
        font-size: 0.5em;
        background-color: black;
        width: max-content;
        height: max-content;
        text-align: center;
        font-weight: bold;
        padding: 0.1em 0.2em;
        margin-left: 1em;
        border: black 1px solid;
        border-radius: 10%;
        color: white;
        position: absolute;
        top: 15%;
        left: 100%;
        
        @media (max-width: 800px) {
            left: 110%;
            top: -100%;
            margin-left: -60px;
        }
    }

    :hover .tooltiptext{
        visibility: visible;
    }
`

export const FlashcardContainer = styled.div`
    
`
export const Flashcard = styled.div`
    background: rgb(211,211,211);
    font-weight: bold;
    padding: 5rem;
    text-align: center;
    width: 18rem;
    height: 5rem;
    border-radius: 5%;
    border: 3px grey solid;
    box-shadow: rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px;
    transition: all 1s ease;
    transform-style: preserve-3d;
    transform: ${({flip}) => flip ? "rotateX(180deg)" : null};
    animation-name: fade;
    animation-duration: 2s;

    @keyframes fade {
        from {opacity: 0} 
        to {opacity: 1}
    }

    @media (max-width: 800px) {
        height: 50px;
        width: 150px;
        margin-top: 50px;
    }
`

export const FlashcardFront = styled.p`
    backface-visibility: hidden;
`
export const FlashcardBack = styled.p`
    backface-visibility: hidden;
    transform: rotateX(180deg);
    position: relative;

    .deleteCard {
        position: absolute;
        cursor: pointer;
        bottom: 4em;
        left: 20em;
        padding: 0.1em 0.3em;
        box-sizing: border-box;

        :hover {
            font-weight: bolder;
        }

        @media (max-width: 800px) {
            left: 15em;
        }
    }
    
    .deleteCardText {
        visibility: hidden;
        font-size: 0.7em;
        background-color: black;
        width: max-content;
        height: max-content;
        text-align: center;
        padding: 0.1em 0.2em;
        margin-left: 1em;
        border: black 1px solid;
        border-radius: 10%;
        color: white;
        position: absolute;
        bottom: 6.1em;
        right: -2.5em;
        
        @media (max-width: 800px) {
            left: 100%;
            top: -5.6em;
            margin-left: -60px;
        }
    }

    :hover .deleteCardText{
        visibility: visible;
    }
`

export const FlashcardDotContainer = styled.div`
    margin-bottom: 1em;

    @media (max-width: 800px) {
        height: 5%;
        width: 80%;
        text-align: center;
    }

    @media (min-height: 700px) {
        margin-top: -2em;
    }
`

export const FlashcardDot = styled.span`
    cursor: pointer;
    height: 20px;
    width: 30px;
    margin: 0 0.5em;
    background-color: #bbb;
    border-radius: 10%;
    display: inline-block;
    transition: background-color 0.6s ease;
    animation-name: fade;
    animation-duration: 0.8s;
    
    &.active {
        background-color: #717171;
    }

    :hover {
        background-color: #717171
    }
`

