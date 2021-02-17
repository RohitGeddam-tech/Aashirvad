import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scrn from './Photos/offers2.jpg';


export default class Responsive extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 830,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 590,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      };
      return (
        <div className='boxslick'>
          <Slider {...settings}>
            <div className='insideboxslick'>
                <div className='Mobslide'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnre'>Book Now</a>
                </div>
            </div>
            <div>
                <div className='Mobslide'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnre'>Book Now</a>
                </div>
            </div>
            <div>
                <div className='Mobslide'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnre'>Book Now</a>
                </div>
            </div>
            <div>
                <div className='Mobslide'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnre'>Book Now</a>
                </div>
            </div>
            <div>
                <div className='Mobslide'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    <a className='ui button btnre'>Book Now</a>
                </div>
            </div>
          </Slider>
        </div>
      );
    }
  }