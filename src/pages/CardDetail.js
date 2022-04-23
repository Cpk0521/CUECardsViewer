import {useState} from 'react'
import {useParams} from "react-router-dom";

import Header from '../conponents/CardDetail/Header';
import CardViewer from '../conponents/CardDetail/CardViewer';
import ViewerOptions from '../conponents/CardDetail/ViewerOptions';

import '../index.css';
import { CardsData } from '../data/Data';

export default function CardDetail() {

    // const location = useLocation();
    const params = useParams();
    
    const [Carddetail, setCarddetail] = useState(CardsData.find(x => x.cardId == params.cid))
    const [viewerstate, setvViewerstate] = useState('image');
    const [imageurl, setImageurl] = useState('');

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
