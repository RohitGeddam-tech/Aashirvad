import React from 'react';
import scrn from './Photos/offers.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Button, CardDeck } from 'react-bootstrap';

const MultiCarouselPage = () => {
    return (
        <Carousel className='carouselsize'>
        <Carousel.Item className='carouselflow'>
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
  
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
  
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
  
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
      
        </Carousel.Item>
  
        {/* <Carousel.Item>
          {Cards}
        </Carousel.Item> */}
  
        <Carousel.Item className='carouselflow'>
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
  
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
  
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
  
        <Card className='cardsize'>
          <Card.Img className='smallimgincard' variant='top' src={scrn} />
          <Card.Body>
            <Card.Title>TEST NAME</Card.Title>
            <Card.Title>Rs.600</Card.Title>
            <Card.Text>  Kristy is an art director living in New York.</Card.Text>
            <Button variant='primary'>BOOK NOW</Button>
          </Card.Body>
        </Card> 
        </Carousel.Item>
      </Carousel>
    )
  }

export default MultiCarouselPage;