import React, { useEffect, useState } from 'react'

export const UseMedia = (media) => {
    const [match, setMatch] = useState(null);  

    useEffect(() => { 

        function changeMatches(){ 

            const {matches} = window.matchMedia(media); 
    
            setMatch(matches); 
        }

        window.addEventListener('resize', changeMatches); 
        changeMatches(); 
        return () => {
            window.removeEventListener('resize', changeMatches); 
            
            
        }

    }, [media])
  
    return match; 
}

