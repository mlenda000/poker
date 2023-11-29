import "./styles/playerNav.scss";
import { readyDeck } from "../utils";
import { starterDeck } from "../../logic/Deck";

const PlayerNav = (props) => {
  const { dealCards, bettingRound, startNewRound, setShuffledDeck } = props;

  let checkCall;
  if (props.bid === 1) {
    checkCall = "Check";
  } else {
    checkCall = "Call";
  }

  return (
    <div className="footer__button">
      {bettingRound < 5 ? (
        <button
          className="playerNav__Button"
          onClick={() => {
            dealCards();
          }}
        >
          Deal
        </button>
      ) : (
        <button
          className="playerNav__Button"
          onClick={() => {         
            startNewRound();         
          }}
        >
          New Game
        </button>
      )}
      <button className="playerNav__Button">{checkCall}</button>
      <button className="playerNav__Button">Bet</button>
      <button className="playerNav__Button">Fold</button>
    </div>
  );
};

export default PlayerNav;
