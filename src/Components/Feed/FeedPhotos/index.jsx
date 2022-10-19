import React, { useEffect } from 'react'

import {FeedPhotosItens} from '../../Feeds/FeedPhotoItens';  
import {UseFetch} from '../../../Hooks/UseFetch';  
import { PHOTOS_GET } from '../../../Api/api'; 
import {Erro} from '../../Helper/Erro'; 
import {Loading} from '../../Helper/Loading';  
import { ListPhotos } from './styles';
export const FeedPhotos = ({setModalPhoto}) => {
  const {data, loading, error, request} = UseFetch(); 
 ; 
    useEffect(() => { 

        async function fetchPhotos() { 
          const {url , options} = PHOTOS_GET({page: 1,  total: 6, user: 0}); 
           request(url, options)

        
        } 

        fetchPhotos(); 

    }, [request])
    if(error) return <Erro error={error}/> 
    if(loading) return <Loading/> 
    if(data)
    return (
      <ListPhotos className="animeLeft"> 
        
        {data.map(photo =>
           <FeedPhotosItens 
            
            key={photo.id} 
            photo={photo} 
            setModalPhoto={setModalPhoto} 
            />)}

      </ListPhotos> 
      
    )
    else return null; 
}
