import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../../Forms/Input'
import {Button} from '../../Forms/Button'; 
import { UseForm } from '../../../Hooks/UseForm';
import {Global} from '../../../GlobalContext/useContext'; 
export const LoginForm = () => {

  
  const userName = UseForm();   
  const password = UseForm(); 
   
  const {userLogin, error, loading} = useContext(Global)
 
  
 

  const handleSubmit = async  (e) =>  { 
    e.preventDefault();  
    if(userName.validate() && password.validate()){ 
      userLogin(userName.value, password.value)

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

          {loading ? ( 
              <Button disabled >Carregando... </Button>  
          ): (
            <Button submit="submit">Entrar</Button>  
          )}
         
          {error && <p>{error}</p>}
          
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  )
}
