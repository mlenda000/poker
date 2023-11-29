import { useState, useEffect, useRef, useCallback } from "react";
import Footer from "./components/footer";
// import Header from "./components/header";
import Table from "./components/table";
import { starterDeck } from "./logic/Deck";
import { readyDeck } from "./components/utils";
import "./App.scss";

function App() {
  const [playerCount, setPlayerCount] = useState(2);
  const [bet, setBet] = useState(0);
  const [bettingRound, setBettingRound] = useState(0);

  const gameStarted = useRef(false);
  const [gameRound, setGameRound] = useState(0);
  const [shuffledDeck, setShuffledDeck] = useState();
  const [players, setPlayers] = useState(undefined);

  const dealCards = useCallback(
    (numberOfCards = 1) => {
      //uses an iterator (...) to copy data into new array and not affect original
      console.log("shuffledeck",shuffledDeck, "starterdeck",starterDeck)
      let remainingCards = [...shuffledDeck.deck];
      // copy current state to update
      const playersCopy = { ...players };
      // pull 3 card for each player to be dealt
      const cardsToDeal = remainingCards.splice(0, numberOfCards * playerCount);
      // loop over the cards to deal and give one card to each player until all cards are gone
      cardsToDeal.forEach((card, index) => {
        // use index to calculate which player to deal a card to
        const playToGiveCardTo = (index % playerCount) + 1;
        const player = `p${playToGiveCardTo}`;
        playersCopy[player].hand.push(card);
      });
      setPlayers(playersCopy);
      setShuffledDeck({ deck: remainingCards });
    //   console.log(shuffledDeck, players);
      setBettingRound((round) => (round += 1));
    },
    [playerCount, players, shuffledDeck]
  );


  //useCallback protects it from the useEffect so that it doesn't keep rerendering
  const startNewRound = useCallback(() => {
    //clear player hands
   
    const playersCopy = { ...players };
    Object.keys(playersCopy).forEach((key)=> playersCopy[key].hand = []);
    setPlayers(playersCopy);
    const newDeck = {deck: readyDeck(starterDeck)}
    setShuffledDeck(newDeck);
    console.log(shuffledDeck)
    // dealCards(3);
    setBettingRound(0);
  }, [dealCards, players, shuffledDeck]);

  //monitors the playerCount state and adjusts on change
  useEffect(() => {
    if (players === undefined) {
      const newPlayers = {};
      for (let i = 0; i < playerCount; i++) {
        newPlayers[`p${i + 1}`] = { hand: [], active: true };
      }
      setPlayers(newPlayers);
    }
  }, [playerCount, players]);

  //monitors the playerCards state and adjusts on change
  // kick off a new game
  useEffect(() => {
    // initial deal
    if (players && !gameStarted.current) {
      startNewRound();
      gameStarted.current = true;
    }
  }, [players, dealCards, startNewRound]);

  useEffect(() => {
    if(shuffledDeck?.deck.length === 52){
        dealCards(3);
    }
  },[shuffledDeck, dealCards])

  return (
    <div className="main">
      <Table playerCount={playerCount} players={players} />
      <Footer
        setShuffledDeck={setShuffledDeck}
        bet={bet}
        dealCards={dealCards}
        setBet={setBet}
        bettingRound={bettingRound}
        currentPlayer={players?.p1}
        startNewRound={startNewRound}
      />
    </div>
  );
}

export default App;
