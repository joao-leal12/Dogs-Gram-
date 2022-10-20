import React, { useState } from 'react' 
import {UseFetch} from '../../../Hooks/UseFetch' 
import {Form, Textarea, Button} from './styles' 
import {COMMENT_POST} from '../../../Api/api'; 
import {Erro} from '../../Helper/Erro'

import {ReactComponent as Enviar} from '../../../assets/enviar.svg' 
export const PhotoCommentsForm = ({id, setComments}) => {
  const [comment, setComment] = useState(''); 
  const {request, error } = UseFetch();  

   async function handleSubmit(e) { 
      e.preventDefault(); 
      const {url, options} = COMMENT_POST(id, {comment});
  
     const {response, json} =  await request(url, options) 

     if(response.ok){ 

      setComments(comments => [...comments, json ])
      setComment(''); 
     }  
    }

  return (
      <Form onSubmit={handleSubmit}>
        
       <Textarea 
        value={comment} 
        onChange={(e) => setComment(e.target.value) }
        id={comment} 
        name={comment}
        placeholder="Comente aqui"
       />  

       <Button>
          <Enviar/> 
       </Button>
        <Erro error={error}/> 
      </Form>
  )
} 
