import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../../Forms/Input'
import {Button} from '../../Forms/Button'; 
import { UseForm } from '../../../Hooks/UseForm';
import { TOKEN_POST } from '../../../Api/api';

export const LoginForm = () => {
  
  const userName = UseForm();   
  const password = UseForm(); 
   
  useEffect(() => { 

      const token = localStorage.getItem('token'); 
      if(token){ 

        getUser(token)
      }


  }, [])


  async function getUser(token){ 
    const{url, options} = USER_GET(token)
    
    const response = await fetch(url, options); 
    const data = await response.json(); 


  }
 

  const handleSubmit = async  (e) =>  { 
    e.preventDefault();  
    if(userName.validate() && password.validate()){ 

    
      const {url, options} = TOKEN_POST({username: userName.value})
      
      const response = await fetch(url, options)
      const data = await response.json(); 
      console.log(data.token); 
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
          <Input 
            type="text  " 
             id="nome" 
            label="usuario" 
            {...userName}
           
          /> 
          <Input 
            label="Senha"
            type="password" 
            id="password" 
            {...password}

          /> 
          <Button submit="submit">Entrar</Button>
          
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  )
}
