// import { order, getHandDetails } from "../../logic/handValues";
// import image1 from "../../images/10_of_diamonds.png";
import "./styles/table.scss";
import { playerImages } from "../../logic/Player";
import PlayerCards from "../playerCards/index";

const Table = ({ players}) => {
  const player1 = players?.p1 || false;
  const player2 = players?.p2 || false;
  const player3 = players?.p3 || false;
  const player4 = players?.p4 || false;
  const player5 = players?.p5 || false;
  const player6 = players?.p6 || false;
  const player7 = players?.p7 || false;
  const player8 = players?.p8 || false;
  let i = 1;
  return (
    <div className="stage">
      <div className="stage-container">
        {player4?
        <div className="player4"><img src={playerImages[11].img} alt={playerImages[0].alt}/></div>:<div className="player4"></div>
        }
        {player5?
        <div className="player5"><img src={playerImages[4].img} alt={playerImages[0].alt}/></div>:<div className="player5"></div>
        }
        {player6?
        <div className="player6"><img src={playerImages[13].img} alt={playerImages[0].alt}/></div>:<div className="player6"></div>
        }
        {player7?
        <div className="player7"><img src={playerImages[6].img} alt={playerImages[0].alt}/></div>:<div className="player7"></div>
        }
        <div className="table">
          <div className="table-cards">
          {player1 && <PlayerCards hand={player1.hand} playerNumber={1} />}
          {player2 && <PlayerCards hand={player2.hand} playerNumber={2} />}
          {player3 && <PlayerCards hand={player3.hand} playerNumber={3} />}
          {player4 && <PlayerCards hand={player4.hand} playerNumber={4} />}
          {player5 && <PlayerCards hand={player5.hand} playerNumber={5} />}
          {player6 && <PlayerCards hand={player6.hand} playerNumber={6} />}
          {player7 && <PlayerCards hand={player7.hand} playerNumber={7} />}
          {player8 && <PlayerCards hand={player8.hand} playerNumber={8} />}
          </div>
        </div>
        {player3?
        <div className="player3"><img src={playerImages[2].img} alt={playerImages[0].alt}/></div>:<div className="player3"></div>
        }
        {player2?
        <div className="player2"><img src={playerImages[16].img} alt={playerImages[i].alt}/></div>:<div className="player2"></div>
        }
        {player1?
        <div className="player1"><img src={playerImages[23].img} alt={playerImages[0].alt}/></div>:<div className="player1"></div>
        }
        {player8?
        <div className="player8"><img src={playerImages[7].img} alt={playerImages[0].alt}/></div>:<div className="player8"></div>
        }
      </div>
    </div>
  );
};
export default Table;
