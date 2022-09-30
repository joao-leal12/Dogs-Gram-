import React, { useState } from 'react'

const types = { 

    email: { 
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        message: 'Preencha o campo corretamente'
    } 

}

    function handleChange(e){

        setValue({...value, [e.target.id]: e.target.value})

    }

        export const UseForm = (user, type) => {
           const [value, setValue] = useState({...user
        })
           const [error,setError] = useState()
           
            return{
                value,
                setValue, 
                handleChange

            }
        }

