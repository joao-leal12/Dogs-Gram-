import styled from "styled-components"
export const Section = styled.section` 

    display:grid; 
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh; 
    gap: 3.2rem; 
    

    &::before{ 
        content: ''; 
        display: block; 
        background: url('src/assets/login.jpg') no-repeat center center/cover;  

    }


    @media (max-width: 64rem) { 

            grid-template-columns: 1fr; 

            &::before{ 
                display: none; 
            } 



    }


`  


export const FormsContainer = styled.div` 

    max-width: 48rem; 
    padding: 3.2rem; 
    margin-top: 20vh; 


    @media (max-width: 64rem) { 

        max-width: 100%; 

    }

` 