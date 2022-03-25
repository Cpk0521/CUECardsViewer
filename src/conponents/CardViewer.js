import React from 'react'
import '../index.css';

export default function CardViewer({Carddetail, viewerstate, imageurl}) {

    const ViwerSwitch = () => {
        switch (viewerstate) {
            case 'image':
                return (<img id='v-img' src={imageurl!=''?process.env.PUBLIC_URL +'/'+ imageurl : process.env.PUBLIC_URL +'/'+ Carddetail.image.Normal} alt={''}></img>)
            case 'video':
                return (<video id='v-video' controls autoPlay={'autoplay'} preload="auto">
                            <source src={process.env.PUBLIC_URL +'/' + Carddetail.animation} type="video/mp4"/>
                        </video>)
            default:
                break;
        }
    }

    return (
        <>
            <div id='viewer'>
                {ViwerSwitch()}
            </div>
            <div id='description'>
                <span>{Carddetail.alias == '0'?'【】':Carddetail.alias}</span> <span>{Carddetail.heroine}</span>
            </div>
        </>
    )
}
