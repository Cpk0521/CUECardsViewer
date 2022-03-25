import { useNavigate } from "react-router-dom";

export default function Cards( {data, selected, onselecting, kaika, ismobile} ) {

  const navigate = useNavigate();

  const onclick = () => {
    onselecting(data);
    if(!ismobile){
      navigate(`/CardDetail/${data.cardId}`, {state:data});
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
