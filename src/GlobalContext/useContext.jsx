import React, {createContext, useCallback, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDADE_POST, USER_GET} from '../Api/api';  



export const Global = createContext(); 



export const GlobalContext = ({children}) => {
    const [data, setData] = useState(null); 
    const [login, setLogin] = useState(null) 
    const [loading, setLoading] = useState(false) 
    const [error, setError] = useState(); 
    const navigate  = useNavigate()
      
    
    const userLogout = useCallback(  async function (){ 

        setData(null); 
        setError(null)
        setLoading(false); 
        setLogin(false); 

        window.localStorage.removeItem('token') 
        navigate('/login')

    }, [navigate])




   

    async function getUser(token){ 
        const {url, options} = USER_GET(token); 
        const responseGet = await fetch(url, options); 
        const dataFetch = await responseGet.json(); 
        setData(dataFetch); 
        setLogin(true); 




    }
 
    async function userLogin(username, password){  
        try{ 
            setError(null) 
            setLoading(true) 
            const {url, options } = TOKEN_POST({username, password}) 
            const tokenRes = await fetch(url, options) 
            console.log(tokenRes); 
            if(!tokenRes.ok){  
                
                throw new Error(`Error: Usuario não encontrado `)
            }
            const {token} = await tokenRes.json(); 
    
            localStorage.setItem('token', token); 
     
            await  getUser(token)
            navigate('/conta')
        } catch(erro) { 

            setError(erro.message);  
            setLogin(false);  
           
        } finally {       
            
            setLoading(false)

        }

    } 

    useEffect(() => {

        async function autoLogin(){ 
            const token = window.localStorage.getItem('token');  

            if(token){ 
              try{ 
                  
                  setError(null)
                  setLoading(true)
                  const {url, options} = TOKEN_VALIDADE_POST(token) 
                  const response = await fetch(url, options )
                  if(!response.ok) throw new Error('Token Invalido'); 
                  await getUser(token)
                }catch(erro){  
                   userLogout()

                 }finally{ 

                    setLoading(false); 
                    
                }
                }else{ 
                setLogin(false); 
                }
             
        }
        autoLogin()
        
    }, [])


  return (
    <Global.Provider value={{userLogin,userLogout, data, error, loading, login }}>
        {children} 
    </Global.Provider>

  )
}
