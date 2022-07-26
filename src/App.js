import "./App.css"
import { useState } from "react"
import Players from "./components/Players"

import { PlayersProvider } from "./context/PlayersProvider"
import usePlayers from "./hooks/usePlayers"
import Juego from "./components/Juego"
import Cartas from "./components/Cartas"

const App = () => {

  const [isValidPlayers, setIsValidPlayers] = useState(false)
  const [cardsPlayerOne, setCardsPlayerOne] = useState([])
  const [cardsPlayerTwo, setCardsPlayerTwo] = useState([])
  const [winnerPlayerOne,setWinnerPlayerOne] = useState(false);
  const [winnerPlayerTwo,setWinnerPlayerTwo] = useState(false);

  return (
    <div>
      <PlayersProvider>
        {isValidPlayers ? (
          <Juego
          cardsPlayerOne={cardsPlayerOne}
          setCardsPlayerOne={setCardsPlayerOne}
          cardsPlayerTwo={cardsPlayerTwo}
          setCardsPlayerTwo={setCardsPlayerTwo}
          winnerPlayerOne={winnerPlayerOne}
          setWinnerPlayerOne={setWinnerPlayerOne}
          winnerPlayerTwo={winnerPlayerTwo}
          setWinnerPlayerTwo={setWinnerPlayerTwo}
          />
        ) : (<Players
          isValidPlayers={isValidPlayers}
          setIsValidPlayers={setIsValidPlayers}

        />
          
        )}

      </PlayersProvider>

    </div>
  )
}

export default App