import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../../Forms/Input'
import {Button} from '../../Forms/Button';

export const LoginForm = () => {

 

  const handleSubmit = (e) =>  { 
    e.preventDefault();  
  
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', { 
      method: 'POST', 
      headers: { 
        'Content-type': 'application/json'
      } , 

      body: JSON.stringify()

    })
    .then(response => response.json())
    .then(data => console.log(data)) 


  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
             id="nome" 
            label="usuario"
           
          /> 
          <Input 
            label="Senha"
            type="password" 
            id="password" 
           

          /> 
          <Button submit="submit">Entrar</Button>
          
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  )
}
