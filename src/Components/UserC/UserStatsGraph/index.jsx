import React, {useEffect, useState} from 'react'
import { GraphContainer, Total } from './styles'; 
import {VictoryPie, VictoryChart, VictoryBar} from 'victory';  	
 const UserStatsGraph = ({data}) => {
    const [graph, setGraph] = useState([]); 
    const [total, setTotal] = useState(0)
    
    useEffect(() => { 
        const graphData = data.map(item => { 

            return { 
                x: item.title, 
                y: Number(item.acessos) 
            
            }
        })
        if(total > 0)
        setTotal(data.map(({acessos}) => Number(acessos)).reduce((acc, item) => acc + item)) 
        
        setGraph(graphData); 

    }, [data])
  
return (
    <GraphContainer className="animeLeft">

        <Total className="graphItem">
            <p>Acessos:{total} </p>
        </Total>     
        <div className="graphItem">
            <VictoryPie 
            data={graph} 
            innerRadius={50} 
            padding={{top: 20, bottom: 20, left: 80, right: 80}} 
            styles={{
                data: { 

                    fillOpacity: .9, 
                    stroke:'#fff', 
                    strokeWidth: 2, 
                }, 
                labels : { 
                    fontSize: 14, 
                    fill: '#333', 
                
                }
            }}/> 
        </div>
        <div className="graphItem">

            <VictoryChart>

                <VictoryBar alignment='start' data={graph}>
                
                </VictoryBar>    
            
            </VictoryChart> 

        </div>
    </GraphContainer>
  )
}


export default UserStatsGraph