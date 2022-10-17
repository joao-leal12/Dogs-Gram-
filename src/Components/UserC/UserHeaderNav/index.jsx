import React, { useContext, useEffect, useState } from 'react'
import { Nav, Mobilebutton, NavMobile} from './styles'
import { NavLink, useLocation } from 'react-router-dom'
import {Global} from '../../../GlobalContext/useContext' 
import {ReactComponent as Fotos} from '../../../assets/feed.svg' 
import {ReactComponent as Estatisticas} from '../../../assets/estatisticas.svg'
import {ReactComponent as AdicionarFotos} from '../../../assets/adicionar.svg' 
import {ReactComponent as Sair} from '../../../assets/sair.svg' 
import { UseMedia } from '../../../Hooks/UseMedia'

export const UserHeaderNav = () => { 

    const {userLogout} = useContext(Global); 
    const mobile = UseMedia('(max-width: 64rem)') 
    const [mobileMenu, setmobileMenu] = useState(false);  
    const path = useLocation(); 

    useEffect(() => { 

        setmobileMenu(false); 

    }, [path])
    
  return ( 

    <>
       {mobile && 
       <Mobilebutton  
       
            width={`${!mobileMenu ? '1.92rem': '4px'}`} 
            height={`${!mobileMenu ? '2px': '4px'}`} 
            box={`${!mobileMenu ? '0 6px currentColor, 0 -6px currentColor': '0 8px currentColor, 0 -8px currentColor'}`}
            transform={`${!mobileMenu ? 'rotate(0)': 'rotate(90deg)'}`}
            aria-label="Menu" 
            onClick={() => setmobileMenu(!mobileMenu)}>
        
       </Mobilebutton> 
       
       } 

       
        
    
   { !mobile ? (<Nav>
        <NavLink to="/conta" end activeclassname={`active`}> 
            <Fotos/>
            {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeclassname={`active`}>
                <Estatisticas/> 
            {mobile && 'Estatisticas'}    
        </NavLink> 
        <NavLink to="/conta/postar" activeclassname={`active`}>
            <AdicionarFotos/>
            {mobile && 'Adicionar Fotos'}
        </NavLink> 
        <button onClick={userLogout}>
             <Sair/> 
            {mobile && 'Sair'}
        </button>
    </Nav>) : ( 

        <NavMobile  
        
            transform={`${mobileMenu ? 'translateX(initial)': 'translateX(-10px)'}`} 
            pointerEvents={`${mobileMenu ? 'initial': 'none'}`} 
            opacity={`${mobileMenu ? '1': '0'}`} 
        
        >

            <NavLink to="/conta"  end activeclassname={`active`}> 
                <Fotos/>
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas"  activeclassname={`active`}>
                    <Estatisticas/> 
                {mobile && 'Estatisticas'}    
            </NavLink> 
            <NavLink to="/conta/postar" activeclassname={`active`}>
                <AdicionarFotos/>
                {mobile && 'Adicionar Fotos'}
            </NavLink> 
            <button onClick={userLogout}>
                <Sair/> 
                {mobile && 'Sair'}
            </button>


        </NavMobile>


    )}
    </>
  )
}
