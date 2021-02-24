import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{width:'80%', position:'absolute', marginTop:'100px', marginLeft:'10%'}}>
        <Slider {...settings}>
          <div>
            <div className='mobdet'>
                
                <div className='mobdata'>
                <h3 className='mobh'>Banner Title</h3>
                    <p className='lead mobilep'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    <div className='item mobbutton'>
                      <Link to='/Aashirvad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link> 
                    </div>
                </div>
            </div> 
          </div>
          <div>
            <div className='mobdet'>
                <div className='mobdata'>
                <h3 className='mobh'>Banner Title</h3>
                    <p className='lead mobilep'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    <div className='item mobbutton'>
                    <Link to='/Aashirvad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link> 
                    </div>
                </div>
            </div> 
          </div>
          <div>
            <div className='mobdet'>
                <div className='mobdata'>
                <h3 className='mobh'>Banner Title</h3>
                    <p className='lead mobilep'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
                    </p>
                    <div className='item mobbutton'>
                    <Link to='/Aashirvad/Form'> 
                        <button className="ui button">
                          BOOK AN APPOINTMENT
                        </button> 
                      </Link> 
                    </div>
                </div>
            </div> 
          </div>
        </Slider>
      </div>
    );
  }
}