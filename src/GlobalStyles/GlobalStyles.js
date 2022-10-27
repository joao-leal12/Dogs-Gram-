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


    button, input{ 
        display: block; 
        font-size: 1.6rem;  
        color: #333; 

    }


    
    section,
    nav{ 

        max-width: 128rem; 
        padding: 0 1rem; 
        margin: 0 auto;  
    }

    a{ 
        text-decoration: none;  
        color: #333; 
    } 


    .title{ 
        font-family: var(--type-second); 
        line-height: 1; 
        font-size: 4.8rem; 
        margin: 1.6rem 0; 
        position: relative; 
        z-index: 1; 

        &::after{ 
            content: '';  
            display: block;
            width:2.4rem; 
            height: 2.5rem; 
            background: #fb1;   
            position: absolute; 
            bottom: .5rem; 
            left: -5px;  
            border-radius: 0.32rem; 
            z-index: -1;             
        }
    }
    
    .btn{ 

        font-size: 1.6rem;  
        font-family: var(--type-first); 
        cursor: pointer;    
        border: none; 
        border-radius: 0.64rem;  
        background-color: #fb1;  
        color: #764701; 
        padding: 1.28rem 1.9rem; 
        transition: .3s; 
        min-width: 12.8rem;  
        &:hover, 
        &:focus{ 
            outline: none; 
            box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;  

        } 

        &:disabled{ 
            opacity: .5; 
            cursor: wait;

        }
    }
    

    .animeLeft{ 

        opacity: 0; 
        transform: translateX(-20px); 
        animation: animeLeft .3s forwards; 
 
    }


    @keyframes animeLeft {
        
        to{ 
            opacity: 1; 
            transform: initial;
        } 


        
    }


    .mainContainer{ 

        margin-top: 6.4rem;  
         
    }


    .VictoryContainer{ 
        height: initial!important
    }


`