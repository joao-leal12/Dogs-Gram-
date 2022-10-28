import styled from "styled-components";



export const Section = styled.section`



    .perdeu{ 
        display: inline-block; 
        color: #666; 
        padding: .8rem 0; 
        line-height: 1; 

        &::after{ 
            content: ''; 
            height: .2rem; 
            width: 100%; 
            background: currentColor;  
            display: block; 
        }
    }


`  


export const Formu = styled.form` 

    margin-bottom: 3.2rem; 
    max-width: 48rem; 
    padding: 3.2rem; 


   @media (max-width: 64rem){ 

      max-width: 100%;  

   }

`  


export const Cadastro = styled.div`

    margin-top: 6.4rem; 
    margin-bottom: 6.4rem;      

    p{ 
    
        margin-top: 3.2rem;  
        margin-bottom : 3.2rem; 
    }

    .subtitle{ 
        font-family: var(--type-second); 
        line-height: 1; 
        font-size: 3.2rem; 

        &:after {
            content: ''; 
            display: block; 
            background: #ddd; 
            height: .8rem; 
            width: 4.8rem; 
            border-radius: .4rem; 
            
        }
    }


` 

