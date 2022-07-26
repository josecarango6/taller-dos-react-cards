import React from 'react'
import { useState, useEffect } from "react"
import usePlayers from '../hooks/usePlayers'
import Mensaje from './Mensaje'

const Players = ({setIsValidPlayers}) => {
    const [mensaje, setMensaje] = useState('')

    const {playerOne, setPlayerOne, playerTwo, setPlayerTwo, crearPartida} = usePlayers();

    const handleJugador = (e) => {
        e.preventDefault();
    
        if(!playerOne|| playerTwo === '') {//Si no es un número
          setMensaje('Los campos son obligatorios')
    
          return //detenemos la ejecución del código
        }
    
        setMensaje('')//se elimina del state
        setIsValidPlayers(true)
        crearPartida()

      }
      
  return (
    <div className='contenedor-jugador contenedor sombra'>

      <form onSubmit={handleJugador} className='formulario'>
        <div className='campo'>
          <label>Nombre de los jugadores</label>
           
         
          <input
            className='nuevo-jugador'
            type="text"
            placeholder='Jugador # 1'
            value={playerOne}
            onChange={ e => setPlayerOne(e.target.value)} //lo que escriba el usuario en el input se guarde en la variable setPresupuesto
          />
         <br />
          <input
            className='nuevo-jugador'
            type="text"
            placeholder='Jugador # 2'
            value={playerTwo}
            onChange={ e => setPlayerTwo(e.target.value)} //lo que escriba el usuario en el input se guarde en la variable setPresupuesto
          />
        </div>

        <input type="submit" value="Ingresar" />
     
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} {/* por props le pasamos el tipo */}

      </form>

    </div>
  )
}

export default Players