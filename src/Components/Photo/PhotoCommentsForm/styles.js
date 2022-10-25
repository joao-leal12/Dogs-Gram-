
import styled from "styled-components"; 


export const Form = styled.form` 

    display: grid; 
    grid-template-columns: 1fr auto;
    align-items: stretch; 
    margin:  ${(props) => props.single ? "1rem 0": "1rem"};



`  


export const Textarea = styled.textarea` 

    display: block; 
    width: 100%; 
    font-size: 1.6rem; 
    font-family: var(--type-first); 
    resize : none ; 
    border: 1px solid #eee; 
    padding: .8rem; 
    border-radius: .32rem; 
    background: #eee; 
    transition: .2s ;  


    &:focus, 
    &:hover{ 

        outline: none; 
        border-color: #fb1; 
        background: white; 
        box-shadow: 0 0 0 3px #fea; 

    }

` 



export const Button = styled.button` 

    border: none;
    cursor: pointer; 
    color: #333; 
    background: transparent;
    font-size: 1.6rem; 
    padding: 0 1.6rem; 
    overflow: hidden; 


    &:focus svg *, 
    &:hover svg *{ 

        fill: #fea;
        stroke: #fb1; 

       
    }

    &:focus svg .latir, 
    &:hover svg .latir{ 

        animation: latir 900ms infinite;
        
       
    }




    @keyframes latir {

        0%{
            opacity: 0; 
        } 

        100%{ 
            opacity: 1; 
            
        }

    }

`