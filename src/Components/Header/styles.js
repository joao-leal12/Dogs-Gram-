import styled from 'styled-components'; 


const HeaderContainer = styled.header ` 

    box-shadow: 0 1px 1px rgba(0,0,0, .1);  
    position: fixed; 
    width: 100%; 
    z-index: 100; 
    background: #fff; 
    top: 0; 


    nav{ 

        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        height: 4rem;  
    } 


    a{ 
        
        &:first-child{ 
            padding: .5rem 0;  
        }
    }

    .login{ 
        color: #333; 
        display: flex;
        align-items: center ;
        position: relative; 

        &::after{ 
            content: ''; 
            display: block; 
            width: 1.4rem; 
            height: 1.7rem; 
            background: url('src/assets/user.svg') ; 
            margin-left: .5rem; 
            position: relative; 
            top: -1px;  
            z-index: 10;

        }
    }

`   
 




export { 

    HeaderContainer,

} 