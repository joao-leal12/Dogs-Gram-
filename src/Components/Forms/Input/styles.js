import styled from 'styled-components'; 

const Wrapper = styled.div`
    margin-bottom: 1.6rem; 



` 


 const Inputt = styled.input`

    border: 1px solid #eee; 
    display: block; 
    width: 100%; 
    font-size: 1.6rem; 
    padding: 1.28rem; 
    border-radius: .7rem; 
    background-color: #eee; 
    transition: .3s; 

    &:focus, 
    &:hover{ 

        outline: none; 
        border-color: #fb1; 
        background-color: white; 
        box-shadow: 0 0 0 3px #fea; 
    }

`  


const Label = styled.label`

    display: block; 
    font-size: 1.6rem; 
    line-height: 1; 
    padding-bottom: .8rem; 



`  

const Error = styled.p`

    color: #f31;  
    font-size: 1.4rem; 
    margin-top: .4rem; 

` 


export {
    Wrapper, 
    Inputt, 
    Label , 

    Error 
}