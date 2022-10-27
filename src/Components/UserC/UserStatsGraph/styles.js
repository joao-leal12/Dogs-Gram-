import styled from "styled-components"; 


export const GraphContainer = styled.section` 

    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 3.2rem; 


    .graphItem{ 

        box-shadow: 0 10px 20px rgba(0,0,0,.1); 
        border-radius: .2rem; 
        display: grid;
        align-items: center;

    }
 

   @media(max-width: 64rem){ 

        grid-template-columns: 1fr; 
        margin-bottom: 3.2rem; 


   }

` 



export const Total = styled.div`

    grid-column: 1/3; 
    padding: 3.2rem; 
    font-size: 3.2rem; 

    @media(max-width: 64rem){ 

        grid-column: 1; 


    }


`  