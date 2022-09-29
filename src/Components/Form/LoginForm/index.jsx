import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Input} from '../../Forms/Input'
import {Button} from '../../Forms/Button';
export const LoginForm = () => {
  
  const [user, setUser] = useState({ 
    nome: '',  
    password: ''
  
  }) 

  function handleChange(e){ 
    setUser({...user, [e.target.id]: e.target.value}) 
    console.log(user)
  }  

  const handleSubmit = (e) =>  { 
    e.preventDefault();  
  
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', { 
      method: 'POST', 
      headers: { 
        'Content-type': 'application/json'
      } , 

      body: JSON.stringify({...user})

    })
    .then(response => response.json())
    .then(data => console.log(data)) 


    setUser({nome: '', password: ''}) 
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            value={user.nome} 
            id="nome" 
            handleChange={handleChange} 
            label="usuario"
          /> 
          <Input 
            label="Senha"
            type="password" 
            value={user.password} 
            id="password" 
            handleChange={handleChange}
          /> 
          <Button submit="submit">Entrar</Button>
          
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  )
}
