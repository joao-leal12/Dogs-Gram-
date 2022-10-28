    import styled from "styled-components";


export const ListPhotos = styled.ul`


    display:grid; 
    grid-template-columns: repeat(3, 1fr); 
    justify-items: center;
    gap: 1.6rem; 
    margin-bottom: 1.6rem; 


    @media (max-width: 64rem){ 

        grid-template-columns: repeat(2, 1fr); 
         

    }
` 