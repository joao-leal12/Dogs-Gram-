import styled from 'styled-components'; 


export const Nav = styled.nav`
   

        display: grid;    
        grid-template-columns: repeat(4, 1fr);  
        transform: translateX(initial); 
        gap: 1.6rem; 
        opacity: 0; 
       
        a,
        button{ 

        background: #eee; 
        border-radius: 0.32rem; 
        height: 40px; 
        display:flex; 
        align-items: center;
        justify-content: center;
        transition: .3s;  
        cursor: pointer;   
        


        &:hover, 
        &:focus{ 
            
            svg
                > *{ 
                    fill: #fb1; 
                }
            }

            background-color: white;
            box-shadow: 0 0 0 3px #eee;
            border-color: #333; 
            outline: none; 

        } 



    


    .active{ 

        background: white; 
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;  
    
        svg > *{ 

            fill: #fb1; 

        }
    } 


   

        
        
   
        

   
    


`
export const NavMobile = styled.nav` 

    display: block;
    position: absolute; 
    top: 70px; 
    right: 0; 
    padding: 0 1.6rem; 
    background: white; 
    box-shadow: 0 1px 2px rgba(0,0,0,.2); 
    border-radius: 0.32rem; 
    transition: 300ms; 
    z-index: 1000;          
    opacity: ${(props) => props.opacity}; 
    transform: ${(props) => props.transform}; 
    pointer-events: ${(props)=> props.pointerEvents}; 
     
    a,button{  

        display: flex;
        align-items: center;
        background: none; 
        width: 100%; 
        border: none; 
        border-bottom: 1px solid #eee; 
        padding: 0.8rem 0; 
        cursor: pointer;  

    }

    button{ 
        border-bottom: none; 
    }
    svg{ 
        margin-right: .8rem; 
    }

    a,
    button{ 
        &:hover{ 
            svg > *{ 
            fill: #fb1; 
        }
        }
        
    }

    

`

export const Mobilebutton = styled.button` 


    
        background: #eee; 
        border-radius: 0.32rem; 
        height: 40px; 
        width: 40px; 
        padding: 0; 

        display:flex; 
        align-items: center;
        justify-content: center;
        border: 1px solid transparent; 
        transition: .1s; 
        cursor: pointer;   

        &::after{ 
           
            content: '';
            display:block; 
            border-radius: 2px; 
            background: currentColor;   
            width: ${(props) => props.width};
            height: ${(props) => props.height};
            box-shadow: ${(props) => props.box}; 
            transform: ${(props) => props.transform};  
            transition: 300ms;
       
        }
        &:hover, 
        &:focus{ 

            background-color: white;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1; 
            color: #fb1;  
            outline: none; 

        } 

    



`