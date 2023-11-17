import { order, getHandDetails } from "../../logic/handValues";
import "./styles/table.scss";
import imageBack from "../../images/back-of-card-blue.png";

const Table = () => {
  
  const player8 = true;
    return (
    <div className="stage">
      <div className="table">
        <div className="table-cards">
          <div className="table-cards-player1">
            <img src={imageBack} className="card-back" alt="" />
            <img src={imageBack} className="card-back" alt="" />
          </div>
          <div className="table-cards-player2">
            <img src={imageBack} className="card-back" alt="" />
            <img src={imageBack} className="card-back" alt="" />
          </div>
          <div className="table-cards-player3">
            <div><img src={imageBack} className="card-back" alt="" /></div>
            <div><img src={imageBack} className="card-back" alt="" /></div>
          </div>
          <div className="table-cards-player4">
            <img src={imageBack} className="card-back" alt="" />
            <img src={imageBack} className="card-back" alt="" />
          </div>
          <div className="table-cards-player5">
            <img src={imageBack} className="card-back" alt="" />
            <img src={imageBack} className="card-back" alt="" />
          </div>
          <div className="table-cards-player6">
            <img src={imageBack} className="card-back" alt="" />
            <img src={imageBack} className="card-back" alt="" />
          </div>
          <div className="table-cards-player7">
            <img src={imageBack} className="card-back" alt="" />
            <img src={imageBack} className="card-back" alt="" />
          </div>
          {player8 && (
            <div className="table-cards-player8">
              <img src={imageBack} className="card-back" alt="" />
              <img src={imageBack} className="card-back" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Table;
