import axios from "axios";
import { createContext } from "react"
import { useState, useEffect } from "react"

const BASE_API_URL = "https://deckofcardsapi.com/api/deck";
const PlayersContext = createContext();


const PlayersProvider = ({ children }) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [partida, setPartida] = useState("");

  // const [cardsPlayerOne, setCardsPlayerOne] = useState({})
  // const [cardsPlayerTwo, setCardsPlayerTwo] = useState({})

  const crearPartida = async () => {
    const url = `${BASE_API_URL}/new/shuffle`
    const { data } = await axios(url);
    //console.log(data.deck_id);
    setPartida(data.deck_id);
    //console.log(partida);
  }    

  // const ObtenerCartas = async () => {
  //   const url = `${BASE_API_URL}/${partida}/draw/?count=2`
  //   const { data } = await axios(url);
  //   setCardsPlayerOne({...data.cards[0]});
  //   setCardsPlayerTwo({...data.cards[1]});
  // }    

  //   useEffect(() => {
  //     const consultarAPI =  async () => {
  //      const url=`${BASE_API_URL}/new/`
  //      const {data} = await axios(url);
  //      setPartida(data.deck_id);
  //       console.log(data.deck_id);

  //     }
  //     consultarAPI();
  //  }, [])

  return (
    <PlayersContext.Provider value={{ playerOne, setPlayerOne, playerTwo, setPlayerTwo, crearPartida, partida}}>
      {children}
    </PlayersContext.Provider>
  )
}

export { PlayersProvider };
export default PlayersContext;