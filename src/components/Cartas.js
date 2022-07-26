import React from 'react'
import usePlayers from '../hooks/usePlayers'
import Carta from './Carta';

const Cartas = () => {
    const {cardsPlayerOne, cardsPlayerTwo} = usePlayers();
  return (
    <>
        {/* <p>
            {cardsPlayerOne.map((carta)=>(
                <Carta carta={carta} key={carta.code}/>
            ))}
        </p> */}
    </>
  )
}

export default Cartas