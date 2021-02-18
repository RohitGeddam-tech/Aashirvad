import React,{useEffect, useState} from 'react';
import './CSS/MiddlePage.css';
import line from './Photos/Line3.jpg';
import doc from './Photos/doc.svg';

const Desktop=()=>{
    return(
        <div className='box'>
            <div className='box1'>
            <h2 className='midboxtitle'>Doctor's message <img className='mobline' src={line} alt='...' /> </h2>
                <p className='midboxtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                </p>
            </div>
            <div className='box2'>
                <img className='imgbox2' src={doc}/>
                <h4 className='midmob'>Dr. Tushar Desai</h4>
            </div>
        </div>
    )
}

const Mobile =()=>{
    return(
        <div className='mobbox'>
            <h2 className='midmobboxtitle'>Doctor's message</h2>
            <div className='mobbox2'>
                <img className='mobimgbox2' src={doc}/>
            </div>
            <div className='mobbox1'>
                <p className='midmobboxtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
                </p>
                <h4 className='midmob'>Dr. Tushar Desai</h4>
            </div>
        </div>
    )
}

const MiddlePage=()=> {
    const[isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })

    return(
        <div className='MiddlePage'>
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    )
}

export default MiddlePage;