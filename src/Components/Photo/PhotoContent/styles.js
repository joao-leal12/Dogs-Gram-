import styled from "styled-components"; 


export const ContentPhoto = styled.div` 

    margin: auto; 
    height:  ${(props) => props.single ? "auto": "57rem"}; 
    border-radius: .4rem ; 
    background: #fff; 
    display: grid; 
    grid-template-columns:  ${(props) => !props.single ? "57rem 32rem": "1fr"};  
    
    grid-template-rows: auto 1fr auto; 
    overflow : hidden; 
    opacity: 0;
    transform: scale(.8); 
    animation: scaleUp .3s forwards; 

    @media (max-width: 64rem){ 

        height: auto; 
        max-height: calc(100vh - 6.4rem); 
        overflow-y: auto; 
        grid-template-columns: minmax(32rem, 64rem); 

    }


    @keyframes scaleUp {

        to { 
            opacity: 1; 
            transform: initial;

        }

    }

`

export const ContainerImg = styled.div` 

    grid-row: ${((props) => props.single ? "1" : '1/4')} ; 
    border-radius: ${((props) => props.single ? "0.42rem" : "0")};  
    overflow: ${((props) => props.single ? "hidden" : "auto")};  
    @media (max-width: 64rem){ 

        grid-row: 1; 

    }
    

` 

export const Author = styled.p` 

        opacity: .5; 
        margin-bottom: 1.6rem;
        display: flex ;
        justify-content: space-between;
        align-items: center;


        a{ 
            &:hover{ 

                 text-decoration: underline; 

            }
        }


` 

export const ContainerDetails = styled.div`
     padding: ${(props) => !props.single ? "3.2rem 3.2rem 0 3.2rem ": "1.6rem 0px 0px 0px"}; 

 
` 


export const Details = styled.div` 


`  


export const Visualization = styled.span` 

        &::before{ 

            content: ''; 
            display: inline-block   ;
            width: 1.6rem; 
            height: 1rem; 
            margin-right:.8rem; 
            background: url(src/assets/visualizacao-black.svg) no-repeat; 
        }

` 


export const Title = styled.h1``  


export const Atributes = styled.ul ` 

        display: flex; 
        font-size: 1.8rem; 
        font-weight: bold; 
        margin-top:1.6rem;
        margin-bottom: 3.2rem; 
        
        li{ 

            margin-right: 3.2rem; 
            &::before{ 
                content: ''; 
                display: inline-block; 
                height: 20px; 
                margin-right: .8rem ;  
                position: relative; 
                top: 3px ; 
                width: 2px; 
                background: #333;; 

                margin-top: 5px; 
            }
        }


`