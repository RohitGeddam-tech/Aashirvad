import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scrn from './Photos/offers2.jpg';
import {Link} from 'react-router-dom';
import SliderPopup from './SliderPopup'


export default class Responsive extends Component {

  state={Mobile: window.matchMedia('(max-height:570px)').matches};
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({Mobile: window.matchMedia('(max-height:570px)').matches})
    })
  }

    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
        <div className='boxslick'>
          <Slider {...settings}>
            <div className='insideboxslick'>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    {this.state.Mobile ? <Link to='/Aashirvad/Form'>
                      <button className='ui button btnrea'>Book Now</button>
                    </Link> : <SliderPopup />}
                </div>
            </div>
            <div>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    {this.state.Mobile ? <Link to='/Aashirvad/Form'>
                      <button className='ui button btnrea'>Book Now</button>
                    </Link> : <SliderPopup />}
                </div>
            </div>
            <div>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    {this.state.Mobile ? <Link to='/Aashirvad/Form'>
                      <button className='ui button btnrea'>Book Now</button>
                    </Link> : <SliderPopup />}
                </div>
            </div>
            <div className='lastboxslick'>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    {this.state.Mobile ? <Link to='/Aashirvad/Form'>
                      <button className='ui button btnrea'>Book Now</button>
                    </Link> : <SliderPopup />}
                </div>
            </div>
            <div className='lastboxslick'>
                <div className='deskoffersmobpic'>
                    <img src={scrn}/>
                    <h3>Test Name</h3>
                    <h4>Rs.600</h4>
                    <p>Kristy is an art director living in New York.</p>
                    {this.state.Mobile ? <Link to='/Aashirvad/Form'>
                      <button className='ui button btnrea'>Book Now</button>
                    </Link> : <SliderPopup />}
                </div>
            </div>
          </Slider>
        </div>
      );
    }
  }