import React, { useEffect, useState } from 'react'
import { PostContainer, Background} from './styles'
import {Input} from '../../Forms/Input' 
import {Button} from '../../Forms/Button';
import {UseForm} from '../../../Hooks/UseForm';  
import {UseFetch} from '../../../Hooks/UseFetch';  
import { PHOTO_POST } from '../../../Api/api';
import {Erro} from '../../Helper/Erro'; 
import { useNavigate } from 'react-router-dom'; 
import {Head} from '../../../Components/Helper/Head'; 
export const UserPhotoPost  = () => {
  const nome = UseForm(); 
  const peso = UseForm('number'); 
  const idade = UseForm('number');  
  const [img, setImg] = useState({});  


  
  const {data, error, loading, request} = UseFetch(); 
  const navigate = useNavigate()
  
  useEffect(()=> { 

      if(data) navigate('/conta'); 


  }, [data, navigate])


  function handleImgChange(e){ 
    console.log(e.target); 
   setImg({ 
        preview: URL.createObjectURL(e.target.files[0]),  
        raw: e.target.files[0], 

     })  
     console.log(img); 
    } 

  
  function handleSubmit(e){ 
    e.preventDefault(); 
    const formData = new FormData(); 

    formData.append('img', img.raw);  
    formData.append('nome', nome.value);  
    formData.append('peso', peso.value);  
    formData.append('idade', idade.value); 

    const token = window.localStorage.getItem('token'); 
    
    const {url, options} = PHOTO_POST(formData,token )
    request(url, options); 
  } 


  
  return (
    <PostContainer className="animeLeft">
      <Head title="Poste a sua foto"/> 
       <form onSubmit={handleSubmit}>

          <Input label="nome" type="text" name="nome" {...nome}/> 
          <Input label="peso" type="number" name="peso" {...peso}/>
          <Input label="idade " type="number" name="idade"{...idade}/> 
          <input 
            
            id="img" 
            type="file" 
            name="img" 
            onChange={handleImgChange}
            
            />
          {loading ? 
         
         (<Button disabled>Enviando...</Button>)
           : ( <Button>Enviar</Button>)  } 

            <Erro error={error}/>
       </form> 
       <div>

          {img.preview &&  (

              <Background 
                style={{backgroundImage: `url('${img.preview}')`}} 

              >
              
              </Background>


          )}
          
       </div>
    </PostContainer>
  )
} 
