import styled from "styled-components";


export const Delete = styled.button` 
    line-height: 1; 
    border: 1px solid transparent; 
    font-size: 1.4rem; 
    font-family: var(--type-first); 
    background: #ddd; 
    padding: 0.48rem 9.6rem; 
    cursor: pointer; 
    border-radius: .8rem; 
    transition: .1s ; 


    &:focus, 
    &:hover{ 

        outline: none; 
        background: white; 
        box-shadow: 0 0 0 3px #eee ;
        border-color: #333; 

    }

`