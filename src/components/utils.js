export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const cleanup = (player) => {
    player.map((cards) => {
        cards.map((c)=>{
            console.log(c)
            return c;
        })
        return cards;
    })
    
}


export const deal = (player) => {
  const cards = player.map((a) => {
            return <div key={a.cardID}><img className="card" src={a.img} alt={a.name}/></div>
        })
return cards;
}

