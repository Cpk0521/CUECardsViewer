import {useState, useEffect} from 'react'
import {useLocation, useParams} from "react-router-dom";

import Header from '../conponents/Header';
import CardViewer from '../conponents/CardViewer';
import ViewerOptions from '../conponents/ViewerOptions';

import '../index.css';

export default function CardDetail() {

    const location = useLocation();
    const params = useParams();
    
    const [Carddetail, setCarddetail] = useState(location.state)
    const [viewerstate, setvViewerstate] = useState('image');
    const [imageurl, setImageurl] = useState('');

    useEffect(async ()=>{

       if(!Carddetail){
            const res = await fetch('./Jsondata/CardsData.json');
            const data = await res.json();
            let detail = data.Cards.find(x => x.cardId == params.cid);
            setCarddetail(detail);
       }

    },[])
    
    return (
        <>
            <Header />
            
            <div className='cardd-content'>

                <div className='cardd-content-left'>
                    {(!Carddetail)?'':<CardViewer Carddetail={Carddetail} viewerstate={viewerstate} imageurl={imageurl}/>}
                </div>

                <div className='cardd-content-right'>
                    {(!Carddetail)?'':<ViewerOptions Carddetail={Carddetail} setvViewerstate={setvViewerstate} setImageurl={setImageurl} />}
                </div>

            </div>
        </>
    )
}
