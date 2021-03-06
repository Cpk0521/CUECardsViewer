import '../../index.css'

import { useNavigate } from "react-router-dom";
import { useContext } from 'react';

import {FilterContext} from '../../index'

export default function Cardpreview( {Card} ) {
  
  const navigate = useNavigate();
  const {kaika} = useContext(FilterContext);

  const checkalias = (alias) => {
    if(alias == "0"){
      return "【】";
    }

    return alias;
  }

  const CardImage = (kaika) =>{
    if(kaika == true && Card.image.Blooming){
      return process.env.PUBLIC_URL+'/'+Card.image.Blooming;
    }else{
      return process.env.PUBLIC_URL+'/'+Card.image.Normal;
    }
  }

  return (
    <>
      <div id='preview'>
        <div id='preview-bg'>
          <img src={Card? CardImage(kaika) : process.env.PUBLIC_URL+'/images/bg.jpg'}></img>
        </div>
          <div id='preview-bottom'>
            <div id='preview-bottom-left'>
              <p>{Card? Card.heroine : ''}</p>
              <p>{Card? checkalias(Card.alias) : ''}</p>
            </div>
          </div>
      </div>

      {Card?<button id='more-btn' onClick={()=>{navigate(`/CardDetail/${Card.cardId}`)}}><span>詳細確認</span></button>:<></>}

    </>
  )
}

