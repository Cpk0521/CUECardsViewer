import Cardpreview from "../conponents/Home/Cardpreview"
import Filter from "../conponents/Home/Filter"
import Listview from "../conponents/Home/Listview"

import { useState, useContext } from 'react'

import {FilterContext} from '../index'

export default function Home() {

  const {ismobile} = useContext(FilterContext);
  const [selectedCard, onSelectCard] = useState(null); 

  return (
    <div id='homeroot'>
      {ismobile?<Cardpreview Card={selectedCard}/>:<></>}
      <Filter/>
      <Listview selected={selectedCard?.cardId} onSelectCard={onSelectCard}/>
    </div>
  )
}
