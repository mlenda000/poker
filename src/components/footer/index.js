import "./styles/footer.scss";
import PlayerNav from "../playerNav/index";

const Footer = (props) => {
  const {
    bet,
    setBet,
    currentPlayer,
    bettingRound,
    dealCards,
    startNewRound,
    setShuffledDeck
  } = props;

  return (
    <div className="footer">
      <div className="footer-container">
        <PlayerNav
          bet={bet}
          setBet={setBet}
          bettingRound={bettingRound}
          dealCards={dealCards}
          startNewRound={startNewRound}
          setShuffledDeck={setShuffledDeck}
        />
        <div className="footer__card-layout">
          {currentPlayer?.hand?.map((card) => (
            <div key={card.cardID}>
              <img className="card" src={card.img} alt={card.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
