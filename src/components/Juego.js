import React, { useState, useEffect } from 'react'
import usePlayers from '../hooks/usePlayers';
import cardBase from '../images/card_base2.png';
import axios from "axios";
import Cartas from './Cartas';

const Juego = ({ cardsPlayerOne, setCardsPlayerOne, cardsPlayerTwo, setCardsPlayerTwo, winnerPlayerOne, setWinnerPlayerOne, winnerPlayerTwo, setWinnerPlayerTwo }) => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const { playerOne, setPlayerOne, playerTwo, setPlayerTwo, crearPartida, partida, ObtenerCartas } = usePlayers();

    const [cardWinnersOne, setCardWinnersOne] = useState([]);
    const [cardWinnersTwo, setCardWinnersTwo] = useState([]);
    const [noCards, setNoCards] = useState("");

    const BASE_API_URL = "https://deckofcardsapi.com/api/deck";


    const consultarAPI = async () => {
        const url = `${BASE_API_URL}/${partida}/draw/?count=2`
        const { data } = await axios(url);

        if (data.remaining === 0) {
            setNoCards("Without cards")
            throw new Error("no cards left to draw!");
        }

        var cardOne = data.cards[0];
        var cardTwo = data.cards[1];
        setCardsPlayerOne(cardsPlayerOne => [...cardsPlayerOne, cardOne]);
        setCardsPlayerTwo(cardsPlayerTwo => [...cardsPlayerTwo, cardTwo]);
    }

    const validarCartas = () => {

        var ArrayCardsOne = cardsPlayerOne;
        for (var i = 0; i < ArrayCardsOne.length; i++) {
            for (var j = 1; j < ArrayCardsOne.length; j++) {
                if (ArrayCardsOne[i] != ArrayCardsOne[j]) {
                    let codeCard = ArrayCardsOne[i].value;
                    let codeNextCard = ArrayCardsOne[j].value;
                    if (codeCard == codeNextCard) {
                        setWinnerPlayerOne([true]);
                        let imageOne = ArrayCardsOne[i].image;
                        let imageTwo = ArrayCardsOne[j].image;
                        setCardWinnersOne([imageOne, imageTwo]);
                    }
                }
            }
        }
        if (!winnerPlayerOne) {
            var ArrayCardsTwo = cardsPlayerTwo;
            for (var i = 0; i < ArrayCardsTwo.length; i++) {
                for (var j = 1; j < ArrayCardsTwo.length; j++) {
                    if (ArrayCardsTwo[i] != ArrayCardsTwo[j]) {
                        let codeCard = ArrayCardsTwo[i].value;
                        let codeNextCard = ArrayCardsTwo[j].value;
                        if (codeCard == codeNextCard) {
                            setWinnerPlayerTwo([true]);
                            let imageOne = ArrayCardsTwo[i].image;
                            let imageTwo = ArrayCardsTwo[j].image;
                            setCardWinnersTwo([imageOne, imageTwo]);
                        }
                    }
                }
            }
        }

        // if (winnerPlayerOne == true && winnerPlayerTwo == true) {
            
        // }
       
    }
    const handledButton = (e) => {
        e.preventDefault();
        consultarAPI();
        validarCartas();
    };



    return (
        <div className="container-fluid">
            <div className="cointer mt-4 p-4 border border-dark">
                <div className="col-md-12 border border-dark">
                    <div className="row text-center p-2">
                        <div className="col-md-4">
                            <h2>Jugador 1: {playerOne} {(winnerPlayerOne) ? (<h2 className="text-success">Is the Winner</h2>) : ""}</h2>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-outline-primary btn-lg" onClick={handledButton}><h2>Get Cards</h2></button>
                            <h2 className="text-danger">{noCards}</h2>
                        </div>
                        <div className="col-md-4">
                            <h2>Jugador 2: {playerTwo} {(winnerPlayerTwo) ? (<h2 className="text-success">Is the Winner</h2>) : ""}</h2>
                        </div>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-md-6 mt-4">
                        <div className="row text-center border border-dark">
                            <div className="col-md-12 p-4 border-bottom border-dark">
                                <p className="text-center">Cartas Opcionadas</p>
                                {
                                    (!winnerPlayerOne) ? (<img className="mr-4" src={cardBase} width="304px" height="" />)
                                        : cardWinnersOne.map(data => { return (<img className="mr-3" src={data} alt="carta" width="150px" height="" />); })
                                }

                            </div>
                            <div className="col-md-12">
                                <p className="text-center">Cartas Obtenidas</p>
                                {
                                    cardsPlayerOne.map(data => { return (<img className="mr-3 mb-3" src={data.image} alt="carta" width="150px" height="" />); })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="row text-center border border-dark">
                            <div className="col-md-12 p-4 border-bottom border-dark">
                                <p className="text-center">Cartas Opcionadas</p>
                                {
                                    (!winnerPlayerTwo) ? (<img className="mr-4" src={cardBase} width="304px" height="" />)
                                        : cardWinnersTwo.map(data => { return (<img className="mr-3" src={data} alt="carta" width="150px" height="" />); })
                                }
                            </div>
                            <div className="col-md-12">
                                <p className="text-center">Cartas Obtenidas</p>
                                {
                                    cardsPlayerTwo.map(data => { return (<img className="mr-3 mb-3" src={data.image} alt="carta" width="150px" height="" />); })
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Juego