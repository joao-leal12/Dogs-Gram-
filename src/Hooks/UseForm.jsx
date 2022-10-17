import React, { useState } from 'react'

const types = { 

    email: { 
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        message: 'Preencha o campo corretamente'
    }, 
    number: { 

        regex:/^\d+$/, 
        message: 'Utilize numeros apenas '
    }

}

  
        export const UseForm = (type) => {
           const [value, setValue] = useState('') 
           const [error,setError] = useState(null)
            
           function handleChange(e){

            if(error) validate(value)
            setValue(e.target.value)
    
            }
    
             

            function validate(value){ 

                if(type == false) return true; 

                
                if(value.length == 0){ 
                    setError('Preencha um valor nesse campo') 
                    return false; 
                }else if(types[type] && !types[type].regex.test(value)){

                    setError(types[type].message) 
                    return false; 

                }else { 

                    setError(null); 
                    return true; 

                }


            }

            return{
                
                value,
                setValue, 
                handleChange,
                error,  
                validate: () => validate(value), 
                onBlur: () => validate(value)

            }
        }

