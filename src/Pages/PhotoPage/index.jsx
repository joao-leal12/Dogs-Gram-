import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GETTING_PAGE } from '../../Api/api';
import { UseFetch } from '../../Hooks/UseFetch'; 
import {Erro} from '../../Components/Helper/Erro'; 

export const PhotoPage = () => { 

    const {id} = useParams(); 

        const {data,loading, error, request}  = UseFetch()
    
        useEffect(() => { 

            const {url} = PHOTO_GETTING_PAGE(id); 
            const {response,json} = request(url)
            
            console.log(json); 
        
        } ,[id, request])
        
    if(error) return <Erro error={error}/>  
    return (
    <div>{id}</div>
  )
}
