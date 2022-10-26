import React, { useEffect, useState } from 'react'
import {Input} from '../../Forms/Input' 
import {Button} from'../../Forms/Button';  
import {UseForm} from '../../../Hooks/UseForm'; 
import { UseFetch } from '../../../Hooks/UseFetch';
import { RESET__PASSWORD } from '../../../Api/api'; 
import {Erro} from '../../Helper/Erro'; 
import { useNavigate } from 'react-router-dom'; 
import {Head} from '../../Helper/Head' 
export const LoginPasswordReset = () => {
 const [login, setLogin] = useState(''); 
 const [key, setKey] = useState('');   
  const password = UseForm()
  const {loading, error, request} = UseFetch(); 
  const navigate = useNavigate(); 
  
  
 async function handleSubmit(e){ 

      e.preventDefault(); 
    const {url, options} = RESET__PASSWORD({
      login, 
      key, 
      password: password.value})  

      const {response } =   await request(url,options); 

      if(response.ok) navigate('/login')

  }
  
  
  
  useEffect(() => { 

    const params = new URLSearchParams(window.location.search); 
    const key = params.get('key'); 
    const login = params.get('login')
    if(key) setKey(key); 
    if(login) setLogin(login); 


  }, []); 
  
  return (
    <div>
      <Head title="Resete a senha"/>
      <form onSubmit={handleSubmit}>

        <Input label="nova senha" type="password" name="password" {...password}/> 
        {loading ?  (<Button disabled>Resentar</Button>) : (<Button>Resentar</Button>) }
      </form> 

      <Erro error={error}/>
    </div>
  )
}
