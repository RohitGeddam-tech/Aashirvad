import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scrn from './Photos/offers2.jpg';
import {Link} from 'react-router-dom';
import SliderPopup from './SliderPopup'
import heart from './Photos/heart1.jpg';


export default class Responsive extends Component {

//   state={Mobile: window.matchMedia('(max-height:570px)').matches};
//   componentDidMount(){
//     window.addEventListener('resize', () => {
//       this.setState({Mobile: window.matchMedia('(max-height:570px)').matches})
//     })
//   }

    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 895,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      };
      return (
        <div className='boxslide'>
          <Slider {...settings}>
            <div className='innerslide'>
                <div className='picslide'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>    
            <div className='innerslide'>
                <div className='picslide'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>  
            <div className='innerslide'>
                <div className='picslide'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>  
            <div className='innerslide'>
                <div className='picslide'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>  
            <div className='innerslide'>
                <div className='picslide'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>  
            <div className='innerslide'>
                <div className='picslide'>
                    <h2></h2>
                    <img src={heart}/>
                    <h3>cardiology</h3>
                </div>
            </div>  
          </Slider>
        </div>
      );
    }
  }