import React from 'react'
import {Input} from '../../Forms/Input' 
import {Button} from'../../Forms/Button';  
import {UseForm} from '../../../Hooks/UseForm'; 
import { UseFetch } from '../../../Hooks/UseFetch';
import { LOST__PASSWORD } from '../../../Api/api'; 
import { Erro } from '../../Helper/Erro';
export const LoginPasswordLost = () => {
    const email = UseForm(); 
    const {data, loading, error, request} = UseFetch(); 
   
    async function handleSubmit(e){ 
      e.preventDefault(); 
    if(email.validate()) { 
      const {url, options} = LOST__PASSWORD(
        {
          login : email.value, 
          url: window.location.href.replace('perdeu', 'resetar')
        }
       )
        
       
          await request(url, options); 
       }

    }
  
  return (
    <section>
      
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
      
      <p style={{color: '#4c1'}}>{data}</p>
      
      ) : (


          <form onSubmit={handleSubmit}>
          
              <Input label="Email/usuario" type="text" name="email" {...email} /> 
              {loading ? ( 
                <Button disabled>Enviando...</Button> 
              ) : ( 

                <Button>Enviar E-mail</Button> 

              )}
          </form> 

      )}
        <Erro error={error}/>
    </section>
  )
}
