import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GETTING_PAGE } from '../../Api/api';
import { UseFetch } from '../../Hooks/UseFetch'; 
import {Erro} from '../../Components/Helper/Erro'; 
import {Loading} from '../../Components/Helper/Loading';      
import {PhotoContent} from '../../Components/Photo/PhotoContent'; 
import {ContainerPhotoContent} from './styles'
export const PhotoPage = () => { 

    const {id} = useParams(); 
     
        const {data, loading, error, request}  = UseFetch()
    
        useEffect(() => { 

            const {url, options } = PHOTO_GETTING_PAGE(id); 
             request(url, options)
            
           
        
        } ,[id, request])
        
    if(error) return <Erro error={error}/>  
    if(loading) return <Loading/> 
    if(data)
    return (
    <ContainerPhotoContent className="mainContainer">
    
        <PhotoContent single={true} data={data}/>  
     
    </ContainerPhotoContent>
  ) 
  else return null 
}
