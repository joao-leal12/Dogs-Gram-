import React, { useContext, useState } from 'react'
import { Nav } from './styles'
import { NavLink } from 'react-router-dom'
import {Global} from '../../../GlobalContext/useContext' 
import {ReactComponent as Fotos} from '../../../assets/feed.svg' 
import {ReactComponent as Estatisticas} from '../../../assets/estatisticas.svg'
import {ReactComponent as AdicionarFotos} from '../../../assets/adicionar.svg' 
import {ReactComponent as Sair} from '../../../assets/sair.svg' 

export const UserHeaderNav = () => { 

    const {userLogout} = useContext(Global); 
    const [mobile, setMobile] = useState(); 
  return (
    <Nav>
        <NavLink to="/conta" end activeClassName={`active`}> 
            <Fotos/>
            {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName={`active`}>
                <Estatisticas/> 
            {mobile && 'Estatisticas'}    
        </NavLink> 
        <NavLink to="/conta/postar" activeClassName={`active`}>
            <AdicionarFotos/>
            {mobile && 'Adicionar Fotos'}
        </NavLink> 
        <button onClick={userLogout}>
             <Sair/> 
            {mobile && 'Sair'}
        </button>
    </Nav>
  )
}
