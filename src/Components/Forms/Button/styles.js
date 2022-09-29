import styled from 'styled-components'; 




export const Buttonn = styled.button`

    font-size: 1.6rem;  
    font-family: var(--type-first); 
    cursor: pointer;    
    border: none; 
    border-radius: 0.64rem;  
    background-color: #fb1;  
    color: #764701; 
    padding: 1.28rem 1.9rem; 
    transition: .3s; 
    min-width: 12.8rem;  
    &:hover, 
    &:focus{ 
        outline: none; 
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;  

    } 

    &:disabled{ 
        opacity: .5; 
        cursor: wait;

    }

` 