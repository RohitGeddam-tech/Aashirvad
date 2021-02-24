import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lastimg from './Photos/lastpage.svg';


export default class Responsive extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          }
        ]
      };
      return (
        <div className='Slider'>
          <Slider {...settings}>
            <div>
                <img className='lastimage' src={lastimg} />
            </div>
            <div>
                <img className='lastimage' src={lastimg} />
            </div>
            <div>   
                <img className='lastimage' src={lastimg} />
            </div>
          </Slider>
        </div>
      );
    }
  }