import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0; 
        padding:0; 
        box-sizing: border-box; 
    } 

    *::before, 
    *::after{ 

        margin: 0;
        padding: 0; 

    }
    :root{ 
        
        --type-first: Helvetica, Arial, sans-serif;  
        --type-second: 'Spectral', Georgia; 
        
            font-size: 62.5%; 
    }

    body{ 
    
        color: #333; 
        font-family: var(--type-first); 
        font-size: 1.6rem; 
        padding-top: 4rem; 
    }
 

    ul, li{ 
        
        list-style: none ;

    }
 


    img{ 
        display: block; 
        max-width: 100%; 
    }


    button{ 
        display: block; 
        font-size: 1.6rem;  
        color: #333; 

    }


    main,
    section,
    nav{ 

        max-width: 80rem; 
        padding: 0 1rem; 
        margin: 0 auto; 
    }

    a{ 
        text-decoration: none;  

    }


`