import styled from "styled-components"; 


export const ChildListPhotos = styled.li`

        display: grid; 
        border-radius: .4rem; 
        overflow: hidden; 


        &:nth-child(2){ 
            grid-column: 2/4; 
            grid-row: span 2;
        }
 

        @media (max-width: 64rem){ 
            
            &:nth-child(2){ 
                grid-column: initial; 
                grid-row: initial; 
            }
          
        }


        img, span{ 
            grid-area: 1/1;
        }

        span{ 
           background: rgba(0, 0, 0, .3); 
           color: white; 
           font-size: 1.6rem; 
           text-align: center; 
           align-items: center;
           justify-content: center;
           display: none; 

            &::before{ 
                content: ''; 
                width: 1.6rem; 
                height: 1rem; 
                display: inline-block; 
                margin-right: .4rem; 
                background: url('src/Assets/visualizacao.svg') no-repeat; 

            }
        
        }

 
        &:hover{ 

            span{ 
                display: flex; 
            }

        }
 
 ` 