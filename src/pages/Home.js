import Cardpreview from "../conponents/Cardpreview"
import Filter from "../conponents/Filter"
import Listview from "../conponents/Listview"
import { useMediaQuery } from 'react-responsive'

import { useState, useEffect, useRef } from 'react'

async function getCardslist(setcardslist, backuplist){
  const res = await fetch('./Jsondata/CardsData.json');
  const data = await res.json();
  backuplist.current = data.Cards;
  setcardslist(data.Cards);
}

async function getCharslist(setcharslist){
  const res = await fetch('./Jsondata/CharactorsData.json');
  const data = await res.json();
  setcharslist(data.Charactors);
}

export default function Home() {
  
  const [cardslist, setcardslist] = useState([]);
  const backuplist = useRef([]);
  const [charslist, setcharslist] = useState([]);

  const [selected, onselecting] = useState(); 

  const [kaika, setKaika] = useState(false);
  const [revsort, setrevsort] = useState(false);

  const ismobile = useMediaQuery({query: '(max-width: 1023px)'});

  const sortlist = (sort, checkedState) =>{

    var sorted = [...cardslist];

    switch (sort) {
      case 'cid':
        sorted = [...cardslist].sort((a, b)=>{return a.cardId - b.cardId});
        break;
      case 'char':
        sorted = [...cardslist].sort((a, b)=>{return a.heroineId - b.heroineId});
        break;
      case 'time':
        sorted = [...backuplist.current];
        break;
    }

    if(revsort){
      sorted = sorted.reverse();
    }

    sorted = sorted.filter(x => checkedState.includes(x.heroine));

    setcardslist(sorted);
  }

  const revlist = () => {
    setcardslist([...cardslist].reverse());
  }

  useEffect(()=>{
    getCardslist(setcardslist, backuplist);
    getCharslist(setcharslist);
  }, [])
  
  return (
    <div id='homeroot'>
      {ismobile?<Cardpreview Card={selected} kaika={kaika}/>:''}
      <Filter kaika={kaika} setKaika={setKaika} sortlist={sortlist} revsort={revsort} setrevsort={setrevsort} revlist={revlist} charslist={charslist} ismobile={ismobile}/>
      <Listview cardslist={cardslist} selected={selected?.cardId} onselecting={onselecting} kaika={kaika} ismobile={ismobile}/>
    </div>
  )
}
