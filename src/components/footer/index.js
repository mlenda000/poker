import "./styles/footer.scss";
import { deal, shuffle } from "../utils";
import { deck, image1 } from "../../logic/rules";
import { useState } from "react";


// import PlayerNav from "../playerNav/index";

const Footer = () => {
  const [playerCount, setPlayerCount] = useState(1);

  function readyDeck(deck) {
    const shuffledDeck = shuffle(deck);
    return shuffledDeck;
  }
  function hand(cards, pc) {
    let spentCards = [];
    cards.splice(0, 3 * pc).map((pcs) => {
      spentCards.push(pcs);
    });
    let fullDeck = { dealtCards: spentCards, remainingDeck: cards };
    return fullDeck;
  }

  function playerHand(cards, pc) {
    let p1 = [];
    let p2 = [];
    let p3 = [];
    let p4 = [];
    let p5 = [];
    let p6 = [];
    let p7 = [];
    let p8 = [];
    let hands = [];

    if (pc === 8) {
      for (let i = 0; cards.length > i; ) {
        p8.push(cards.splice(0, 1));
        p7.push(cards.splice(0, 1));
        p6.push(cards.splice(0, 1));
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1, p2, p3, p4, p5, p6, p7, p8);
      return hands;
    } else if (pc === 7) {
      for (let i = 0; cards.length > i; ) {
        p7.push(cards.splice(0, 1));
        p6.push(cards.splice(0, 1));
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1, p2, p3, p4, p5, p6, p7);
      return hands;
    } else if (pc === 6) {
      for (let i = 0; cards.length > i; ) {
        p6.push(cards.splice(0, 1));
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1, p2, p3, p4, p5, p6);
      return hands;
    } else if (pc === 5) {
      for (let i = 0; cards.length > i; ) {
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1, p2, p3, p4, p5);
      return hands;
    } else if (pc === 4) {
      for (let i = 0; cards.length > i; ) {
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1, p2, p3, p4);
      return hands;
    } else if (pc === 3) {
      for (let i = 0; cards.length > i; ) {
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1, p2, p3);
      return hands;
    } else if (pc === 2) {
      for (let i = 0; cards.length > i; ) {
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1, p2);
      return hands;
    } else if (pc === 1) {
      for (let i = 0; cards.length > i; ) {
        p1.push(cards.splice(0, 1));
      }
      hands.push(p1);
      return hands;
    }
  }

  const info = { deck: readyDeck(deck) };
  const initialDeal = hand(info.deck, playerCount);
 let playerCards

  return (
    <div className="footer">
      <div className="footer-container">
        {/* <PlayerNav bid={bid} /> */}
        <button onClick={() => { playerCards = playerHand(initialDeal.dealtCards, playerCount)}}></button>
        <div className="footer__card-layout">{playerCards?deal(playerCards):null}</div>
      </div>
    </div>
  );
};
export default Footer;
