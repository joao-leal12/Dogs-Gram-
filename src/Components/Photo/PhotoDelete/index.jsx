import React from 'react' 
import {Delete} from './styles'; 
import {UseFetch} from '../../../Hooks/UseFetch'; 
import { PHOTO_DELETE } from '../../../Api/api';

export const PhotoDelete = ({id}) => {
    const {request, loading} = UseFetch();       
    async function handleDelete() { 
        const confirm = window.confirm('Tem certeza que deseja deletar?') 

        if(confirm){ 
            const {url, options} = PHOTO_DELETE(id); 

            const {response} = await request(url, options); 
            if(response.ok) window.location.reload()
        }
       
        

    }


return (
    <>
        {loading ? (
            <Delete disabled >
                carregando...
            </Delete>

        ) : (
            <Delete onClick={handleDelete}>
                Deletar
            </Delete>
        )}
        
    </>
  )
}
