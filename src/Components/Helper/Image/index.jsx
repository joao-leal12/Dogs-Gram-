import React , {useState} from 'react'
import {Wrapper, Img, Skeleton} from './styles'; 
export const Image = ({alt, ...props}) => {
    const [skeleton , setSkeleton] = useState(true); 
    function handleLoad(e) { 
        setSkeleton(false); 
        e.target.style.opacity = 1; 
        
    }
 
    return (
    <Wrapper>
       
       {skeleton && <Skeleton></Skeleton>} 
        <Img onLoad={handleLoad} alt="" {...props} /> 

    </Wrapper>
  )
}
