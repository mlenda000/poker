export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
export function readyDeck(deck) {
  const shuffledDeck = shuffle(deck);
  return shuffledDeck;
}
export function playerHand(cards, pc, p1, p2, p3, p4, p5, p6, p7, p8) {
  let hands;
  if (pc === 8) {
    if (p8) {
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
      hands = {
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5,
        p6: p6,
        p7: p7,
        p8: p8,
      };
    } else {
      let p8 = [];
      let p7 = [];
      let p6 = [];
      let p5 = [];
      let p4 = [];
      let p3 = [];
      let p2 = [];
      let p1 = [];
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
      hands = {
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5,
        p6: p6,
        p7: p7,
        p8: p8,
      };
    }
  } else if (pc === 7) {
    if (p7) {
      for (let i = 0; cards.length > i; ) {
        p7.push(cards.splice(0, 1));
        p6.push(cards.splice(0, 1));
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, p6: p6, p7: p7 };
    } else {
      let p7 = [];
      let p6 = [];
      let p5 = [];
      let p4 = [];
      let p3 = [];
      let p2 = [];
      let p1 = [];
      for (let i = 0; cards.length > i; ) {
        p7.push(cards.splice(0, 1));
        p6.push(cards.splice(0, 1));
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, p6: p6, p7: p7 };
    }
  } else if (pc === 6) {
    if (p6) {
      for (let i = 0; cards.length > i; ) {
        p6.push(cards.splice(0, 1));
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, p6: p6 };
    } else {
      let p6 = [];
      let p5 = [];
      let p4 = [];
      let p3 = [];
      let p2 = [];
      let p1 = [];
      for (let i = 0; cards.length > i; ) {
        p6.push(cards.splice(0, 1));
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4, p5: p5, p6: p6 };
    }
  } else if (pc === 5) {
    if (p5) {
      for (let i = 0; cards.length > i; ) {
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4, p5: p5 };
    } else {
      let p5 = [];
      let p4 = [];
      let p3 = [];
      let p2 = [];
      let p1 = [];
      for (let i = 0; cards.length > i; ) {
        p5.push(cards.splice(0, 1));
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4, p5: p5 };
    }
  } else if (pc === 4) {
    if (p4) {
      for (let i = 0; cards.length > i; ) {
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4 };
    } else {
      let p4 = [];
      let p3 = [];
      let p2 = [];
      let p1 = [];
      for (let i = 0; cards.length > i; ) {
        p4.push(cards.splice(0, 1));
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3, p4: p4 };
    }
  } else if (pc === 3) {
    if (p3) {
      for (let i = 0; cards.length > i; ) {
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3 };
    } else {
      let p3 = [];
      let p2 = [];
      let p1 = [];
      for (let i = 0; cards.length > i; ) {
        p3.push(cards.splice(0, 1));
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2, p3: p3 };
    }
  } else if (pc === 2) {
    if (p2) {
      for (let i = 0; cards.length > i; ) {
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2 };
    } else {
      let p2 = [];
      let p1 = [];
      for (let i = 0; cards.length > i; ) {
        p2.push(cards.splice(0, 1));
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1, p2: p2 };
    }
  } else if (pc === 1) {
    if (p1) {
      for (let i = 0; cards.length > i; ) {
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1 };
    } else {
      let p1 = [];
      for (let i = 0; cards.length > i; ) {
        p1.push(cards.splice(0, 1));
      }
      hands = { p1: p1 };
    }
    
  }
  // console.log(hands);
  return hands;
}

export const deal = (player) => {
    // console.log(player)
    let temp = [...player]
    const cards = temp.map((a) => {
      return (
        <div key={a[0].cardID} className="card-container">
          <img className="card" src={a[0].img} alt={a[0].name} />
        </div>
      );
    });
    return cards;
  };
  export function subsequentDeals(cards, pc) {
    let spentCardsMulti = [];
    if (pc === 1) {
      cards.splice(0, pc).map((pcs) => {
        spentCardsMulti.push(pcs);
        return spentCardsMulti;
      });
    } else {
      cards.splice(0, pc).map((pcs) => {
        spentCardsMulti.push(pcs);
        return spentCardsMulti;
      });
    }
    let fullDeck = {
      dealtCards: spentCardsMulti,
      remainingDeck: cards,
    };
    return fullDeck;
  }
