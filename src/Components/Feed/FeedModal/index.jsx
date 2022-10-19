import React, { useEffect } from 'react'
import { ModalContainer } from './styles'
import {UseFetch} from '../../../Hooks/UseFetch'; 
import { PHOTO_GET } from '../../../Api/api';
import { Erro } from '../../Helper/Erro'; 
import { Loading } from '../../Helper/Loading'; 
import { PhotoContent } from '../../Photo/PhotoContent';
export const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request } = UseFetch(); 
  
    useEffect(() => { 

        const {url, options} = PHOTO_GET(photo.id); 
        request(url, options )
    }, [photo, request]) 


    function handleOutSideClick(e){ 

      if(e.target == e.currentTarget){ 

          setModalPhoto(null)
      }

    }
  return (
    <ModalContainer onClick={handleOutSideClick}>
        {error && <Erro error={error}/>}
        {loading && <Loading/>}
        {data && <PhotoContent data={data}/> }
    </ModalContainer>
  )
}
