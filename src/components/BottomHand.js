export default function Deal (props){
    console.log(props.player)
    props.player.map((a) => {
    a.map((b) => {
      b.map((c) => {
        return (
          <div>
            <img src={c.img} alt={c.name} className="card" />
          </div>
        );
      });
      return null;
    });
    return null;
  });
};
