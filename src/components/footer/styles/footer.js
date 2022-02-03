import styled from "styled-components";

export const Container = styled.div`
    background: #5D707F;
    display: ${({display}) => display ? display : "block"};
    ${({direction}) => direction && `flex-direction: ${direction}`};
    justify-content: ${({justifyContent}) => justifyContent && justifyContent};
    text-align: center;
    padding: 1em 0;
    height: 5%;
    min-height: 5%;
`

export const Button = styled.button`
    font-weight: bold;
    padding: 1em 2em;
    cursor: pointer;
    max-height: 4em;
    ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`}
    background: rgb(211,211,211);
    border-radius: 5%;
    
    :active, :hover:enabled {
        background: none;
        border: 2px solid grey;
        color: white;
        transition-duration: 0.4s;
    }

    :disabled {
        cursor: default;
    }

    @media (max-height: 800px) {
        line-height: 0;    
    }
`