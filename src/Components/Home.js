
import React, { useState, useEffect } from 'react';
import './CSS/Home.css';
import cover from './Photos/cover1.jpg';
import cover2 from './Photos/cover2.jpg';
import HomeSlide from "./HomeSlide";
import { Link } from 'react-router-dom';
import Popup from './Popup';

const List = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-height:570px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-height:570px)').matches)
        })
    })


    return (
        <div className='det'>
            <h1 className='h'>Banner Title</h1>
            <div className='tir'>
                <p className="lead p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                </p>
                { isMobile ? <div class="item vb"> <Link to='/Aashirvad/Form'> <button class="ui button">
                    BOOK AN APPOINTMENT
                </button> </Link> </div> : 
                    <div class="item vb"> 
                    <Popup />
                </div>
                }
            </div>
        </div>
    )
}

const MobList = () => {
    return (
        <div className='backimg'>
            <img className='firstimg' src={cover} />
        </div>
    )
}

const Home = () => {
    const [isMobile, setMobile] = useState(
        window.matchMedia('(max-width:750px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width:750px)').matches)
        })
    })
    return (
        <div className='firstpage'>
            
                {isMobile ? <div className='backimg'>
                    <img className='firstimg' src={cover2} />
                    </div>
                    : <MobList />}
                {isMobile ? <HomeSlide /> : <List />}
            
        </div>
    )
}

export default Home;
