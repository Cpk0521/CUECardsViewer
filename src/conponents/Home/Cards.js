import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {FilterContext} from '../../index'

export default function Cards( {data, selected, onSelectCard} ) {

  const {kaika, ismobile} = useContext(FilterContext);

  const navigate = useNavigate();

  const onclick = () => {
    onSelectCard(data);
    if(!ismobile){
      navigate(`/CardDetail/${data.cardId}`);
    }
  }

  const CardImage = (kaika) =>{

    if(kaika == true && data.image.Blooming_thumb){
      return process.env.PUBLIC_URL+'/'+data.image.Blooming_thumb;
    }else{
      return process.env.PUBLIC_URL+'/'+data.image.Normal_thumb;
    }
  }

  return (
    <div className={`Cards ${data.cardId === selected?'Card-selected':''}`}>
      <img src={CardImage(kaika)} onClick={onclick}></img>
    </div>
  )
}
