
import React, { useState, useEffect } from 'react';
import './CSS/Home.css';
import cover from './Photos/cover1.jpg';
import cover2 from './Photos/cover2.jpg';
import Carousel from 'react-bootstrap/Carousel';



const List = () => {
    return (
       
        <div className='det'>
            <h1 className='h'>Banner Title</h1>
            <div className='tir'>
                <p className="lead p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                </p>
                <div className='item vb'>
                    <button className="ui button">BOOK AN APPOINTMENT</button>
                </div>
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

const Mobile = () => {
    return (
        <Carousel className='homecarousel'>
            <Carousel.Item class='itemsize'>
            <div className='mobdet'>
                <h3 className='mobh'>Banner Title</h3>
                <div className='mobdata'>
                    <p className='lead mobp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    <div className='item mobbutton'>
                        <button className='ui button'>BOOK AN APPOINTMENT</button>
                    </div>
                </div>
            </div> 
            </Carousel.Item>
            {/* <Carousel.Item>
            <div className='mobdet'>
                <h3 className='mobh'>Banner Title</h3>
                <div className='mobdata'>
                    <p className='lead mobp'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    <div className='item mobbutton'>
                        <button className='ui button'>BOOK AN APPOINTMENT</button>
                    </div>
                </div>
            </div> 
            </Carousel.Item> */}
        </Carousel>    
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
            <div className='backimg'>
                {isMobile ?
                    <img className='firstimg' src={cover2} />
                    : <MobList />}
                {isMobile ? <Mobile /> : <List />}
            </div>
        </div>
    )
}

export default Home;
