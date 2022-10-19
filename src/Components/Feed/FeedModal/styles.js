import styled from "styled-components"; 


export const ModalContainer = styled.section` 

    position: fixed; 
    
    inset: 0;
    width: 100vw; 
    height: 100vh;
    
    background: rgba(0,0,0,.4); 
   


    display: flex ; 

    z-index: 1000;  


    padding: 3.2rem calc(6.4rem + 16px) 3.2rem 6.4rem;



    @media (max-width: 64rem){ 

        padding: 3.2rem calc(3.2rem + 15px) 3.2rem 3.2rem; 


    }


`
