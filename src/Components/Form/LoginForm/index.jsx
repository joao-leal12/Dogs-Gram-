import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../../Forms/Input'
import {Button} from '../../Forms/Button'; 
import { UseForm } from '../../../Hooks/UseForm';
import {Global} from '../../../GlobalContext/useContext'; 
import {Erro} from '../../Helper/Erro';  
import { Formu, Section, Cadastro } from './styles'; 
import {Head} from '../../Helper/Head'; 
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
    <Section className="animeLeft">
      <Head title="Login"/>
      <h1 className="title ">Login</h1>
      <Formu onSubmit={handleSubmit}>
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
          
          <Erro erro={error} />
          
          
      </Formu>
      <Link className="perdeu" to="/login/perdeu">Perdeu a senha?</Link>
      <Cadastro>
        <h2 className="subtitle">Cadastre-se</h2> 
        <p>Ainda não possui conta? cadastre-se no site</p>
       <Link className="btn"to="/login/criar">Cadastro</Link>
      </Cadastro>
    </Section>
  )
}
