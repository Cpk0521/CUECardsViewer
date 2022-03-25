import {useState} from 'react'
import {useLocation} from "react-router-dom";

import Header from '../conponents/Header';
import CardViewer from '../conponents/CardViewer';
import ViewerOptions from '../conponents/ViewerOptions';

import '../index.css';

export default function CardDetail() {

    const location = useLocation();
    const Carddetail = location.state;

    const [viewerstate, setvViewerstate] = useState('image');
    const [imageurl, setImageurl] = useState('');

    return (
        <>
            <Header />
            
            <div className='cardd-content'>

                <div className='cardd-content-left'>
                    <CardViewer Carddetail={Carddetail} viewerstate={viewerstate} imageurl={imageurl}/>
                </div>

                <div className='cardd-content-right'>
                    <ViewerOptions Carddetail={Carddetail} setvViewerstate={setvViewerstate} setImageurl={setImageurl} />
                </div>

            </div>
        </>
    )
}
