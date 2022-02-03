import styled from "styled-components";

export const Container = styled.form`
    background: #6D8A96;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85%;
`

export const Title = styled.h3`
    padding: 1em 0.7em;
    margin: 1em 0.1em 0;
    text-align: center;
    
    @media (max-height: 700px) {
        padding: 0.6em 0.3em;
        margin: 0.5em 0 0;
        font-size: 13px;
    }
`

export const Selector = styled.select`
    height: fit-content;
    align-self: center;
    padding: 0.5em 1em;
    margin-left: 0.5em;
    background: #A8B3C7;
    border: black solid 2px;
    font-weight: bold;
`

export const Answer = styled.textarea`
    margin: 0.5em;
    width: 40%;
    height: 6em;
    line-height: 1em;
    background: #A8B3C7;
    border: black solid 2px;
    font-weight: bold;
    padding: 1em 2em;
    box-sizing: border-box;
    resize: none;
    
    :focus {
        outline: black solid 1px;
    }

    :last-of-type {
        margin-bottom: 2em;
    }
`