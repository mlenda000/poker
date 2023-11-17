import "./styles/playerNav.scss";
import { deal, shuffle, firstDeal } from "../utils.js";
import { deck } from "../../logic/rules.js";
import { useState, useEffect } from "react";

const PlayerNav = (props) => {
  let checkCall;
//   let playerCount;
  if (props.bid === 1) {
    checkCall = "Check";
  } else {
    checkCall = "Call";
  }
  const [count, setCount] = useState(0);
  const [readyDeck, setReadyDeck] = useState(false);
  

  
//   let temp;
//   let sd;

  //   useEffect(()=> {
  //     const firstDeal = ()=> {}
  //   },[])

//   function setup(sd, sdNew, playerCount = 1) {
//     if (count === 0) {
//       //initial 52 cards
//       //remaining cards from deck
//     //   return shuffledDeck;
//     } else if (count < 5) {
//       deal(sdNew.splice(0, 1));
//       let shuffledDeck = sdNew;
//       // setCount(count + 1);

//       return shuffledDeck;
//     } else {
//       //   setCount(0);
//       //   setReadyDeck(false);
//     }
//   }

  return (
    <div className="footer__button">
      <button
        className="playerNav__Button"
        // onClick={() => {
        //     firstDeal(deck); 
        //   temp = setup(deck, readyDeck ? sd : undefined);
        //   setCount(count + 1);
        //   setReadyDeck(true);
        // }}
      >
        Deal
      </button>
      <button className="playerNav__Button">{checkCall}</button>
      <button className="playerNav__Button">Bet</button>
      <button className="playerNav__Button">Fold</button>
      {/* <button className="playerNav__Button"></button>
            <button className="playerNav__Button"></button> */}
    </div>
  );
};

export default PlayerNav;
