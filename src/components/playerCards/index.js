import imageBack from "../../images/back-of-card-blue.png";
const PlayerHand = ({ hand, playerNumber }) => {
  return (
    <div className={`table-cards-player${playerNumber}`}>
      <div className="card-container">
        <img src={imageBack} className="card-back" alt="" />
      </div>
      <div className="card-container">
        <img src={imageBack} className="card-back" alt="" />
      </div>
      {hand.map((card) => {
        return (
          <div className="card-container" key={card.cardID}>
            <img className="card" src={card.img} alt={card.name} />
          </div>
        );
      })}
    </div>
  );
};
export default PlayerHand;
