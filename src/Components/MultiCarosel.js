import React from 'react';
import scrn from './Photos/offers2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";

const MultiCarouselPage =()=>{
    return (
      <Carousel className='carouselsize'>
        <Carousel.Item className='carouselflow'>
            <div className='deskoffersdisp'>
              <div className='deskoffersdispscroll'>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Read More</a>
                </div>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Read More</a>
                </div>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Read More</a>
                </div>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnread'>Read More</a>
                </div>
              </div>  
            </div>
        </Carousel.Item>
      </Carousel>
    );
  }

export default MultiCarouselPage;
