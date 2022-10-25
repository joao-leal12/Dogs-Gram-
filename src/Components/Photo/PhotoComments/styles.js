import styled from "styled-components"; 


export const CommentContainer = styled.ul` 
    overflow-y: auto; 
    word-break: break-word ; 
    padding:${(props) => props.single ? "0 ": "0.32rem"};
` 

export const CommentItem = styled.li` 

    margin-bottom: 0.8rem;  
    line-height: 1.2;  

` 


export const Author = styled.span` 


` 