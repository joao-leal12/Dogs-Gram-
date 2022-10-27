import React, {useEffect } from 'react'
import { GET_STATS } from '../../../Api/api';
import {Head} from '../../../Components/Helper/Head'; 
import {UseFetch} from '../../../Hooks/UseFetch'; 
import {Loading} from '../../Helper/Loading'; 
import {Erro} from '../../Helper/Erro';    
const UserStatsGraph = React.lazy(() => import('../UserStatsGraph'))

export const UserStats = () => {
    const {data, error, loading, request} = UseFetch(); 

    useEffect(() => { 
      
      async function GetData() { 

        const {url, options} = GET_STATS(); 
        await request(url, options)

      }
 

      GetData(); 

    }, [request])
  

  if(loading) return <Loading/> 
  if(error) return <Erro error={error}/> 
  if(data) 
  return (
    
    <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" /> 
        <UserStatsGraph data={data}/> 
    </React.Suspense>
  )
  else return null 
}