import { image1 } from "../logic/rules";

export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const cleanup1 = (player) => {
    player.map((cards) => {
        cards.map((c)=>{
            return c;
        })
        return cards;
    })
    
}


export const deal = (player) => {
  player.map((a) => {
    a.map((b) => {
        b.map((c) => {
            return <div>{image1}</div>
        })
        return <p>hello</p>;
    })  
    return <p>hello</p>; 
})
}

// export const firstDeal = (sd, playerCount = 1) => {
//     let shuffledDeck = shuffle(sd);
//     deal(shuffledDeck.splice(0, (3 * playerCount)));
//     // console.log(shuffledDeck)
//   };

