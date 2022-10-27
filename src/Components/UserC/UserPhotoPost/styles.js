import styled from "styled-components"; 



export const PostContainer = styled.section` 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 3.2rem; 
    margin-bottom: 3.2rem; 


    #img{ 
        margin-bottom: 1.6rem; 
    
    }


  @media (max-width: 64rem) { 

    grid-template-columns: 1fr; 

  }

`

export const Background = styled.div`

    border-radius: 1.6rem; 
    background-size: cover; 
    background-position: center center; 


    &::after{ 

        content: ''; 
        display:block; 
        height: 0; 
        padding-bottom: 100%; 

    }

` 