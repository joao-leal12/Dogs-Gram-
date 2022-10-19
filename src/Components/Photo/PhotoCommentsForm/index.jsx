import React, { useContext , useState } from 'react' 
import {UseFetch} from '../../../Hooks/UseFetch'
import {Form} from './styles' 
import {ReactComponent as Enviar} from '../../../assets/enviar.svg' 
export const PhotoCommentsForm = ({id}) => {
  const [comment, setComment] = useState(''); 
  const {request, error } = UseFetch();  

   async function handleSubmit(e) { 
      e.preventDefault(); 
      const {url, options} = COMMENT_POST(id, {comment});
  
      await request(url, options) 
    }

  return (
      <Form onSubmit={handleSubmit}>
        
       <textarea 
        value={comment} 
        onChange={(e) => setComment(e.target.value) }
        id={comment} 
        name={comment}
        placeholder="Comente aqui"
       /> 

       <button>
          <Enviar/> 
       </button>

      </Form>
  )
} 
