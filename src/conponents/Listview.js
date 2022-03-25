import Cards from './Cards'
import '../index.css'

export default function Listview({cardslist, selected, onselecting, kaika, ismobile}) {
  
  return (
    <div id='ListView'>
        { cardslist?.map( item => <Cards key={item.cardId} data={item} selected={selected} onselecting={onselecting} kaika={kaika} ismobile={ismobile}/> )}
    </div>
  )
}
