import React, { useContext } from 'react'
import {Section, Title} from './styles'; 
import {Input} from '../../Forms/Input'; 
import {Button} from '../../Forms/Button'; 
import {UseForm} from '../../../Hooks/UseForm'
import { LOGIN_CREATE } from '../../../Api/api'; 
import { Navigate } from 'react-router-dom'; 
import { Global } from '../../../GlobalContext/useContext';
import {UseFetch} from '../../../Hooks/UseFetch';  
import {Erro} from '../../Helper/Erro' ; 
export const LoginCreate = () => {
    const username = UseForm() 
    const email = UseForm('email') 
    const password = UseForm()  

    const {userLogin } = useContext(Global)
    const {loading, error, request} = UseFetch(); 
    console.log(error); 
  async function handleSubmit(e){ 
      e.preventDefault();  

      const {url, options} = LOGIN_CREATE({
        username: username.value, 
        password: password.value, 
        email: email.value
      })
      const {response} = await request(url, options) 
      if(response.ok) userLogin(username.value, password.value)
      
    }
  
  return (
    <Section className="animeLeft">
      <Title className="title">Cadastre-se</Title> 
      <form onSubmit={handleSubmit}>

        <Input type="text" label="usuario" name="username" {...username} /> 
        
        <Input type="password" label="senha" name="password" {...password} /> 
        
        <Input type="email" label="email" name="email" {...email} /> 
        {loading ? (
             <Button disabled>Cadastrando....</Button>
        ): ( 
          
            <Button>Cadastrar</Button>

        )}
        
          <Erro erro={error}/> 
      </form>
    </Section>
  )
}
