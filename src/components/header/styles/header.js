import styled from "styled-components";

export const Container = styled.div`
    background: #5D707F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    height: 10%;
    min-height: 10%;
`

export const Title = styled.h1`
    width: 30%;
    text-align: center;
    cursor: default;
`

export const SideContainer = styled.div`
    width: 40%;
    padding: 0 2em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`

export const Button = styled.button`
    font-size: 16px;
    font-weight: ${({active}) => (active ? "700" : "bold")};
    color: ${({active}) => (active ? "white" : "null")};
    cursor: pointer;
    padding: 1em 2em;
    box-sizing: border-box;
    border: none;
    border-bottom: ${({active}) => (active ? "solid 4px white" : "null")};
    background: none;
    transition-duration: 0.4s;

    :active, :hover {
        color: white;
        border-bottom: solid 4px white;
    }
    :first-of-type {
        margin-right: 1em;
    }
`