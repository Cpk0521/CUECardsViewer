import Cards from './Cards'

import { useContext } from 'react'

import '../../index.css'
import {FilterContext} from '../../index'

export default function Listview({selected, onSelectCard}) {
  
  const {searchList} = useContext(FilterContext);

  return (
    <div id='ListView'>
        { searchList?.map( item => <Cards key={item.cardId} data={item} selected={selected} onSelectCard={onSelectCard}/> )}
    </div>
  )
}
