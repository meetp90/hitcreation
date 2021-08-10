import React from 'react'
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import {Row,Col} from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css";
import "../scss/Viewer.scss"
import {Button} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import img1 from '../images/slide1.png';
import img2 from '../images/slide2.png';
import img3 from '../images/slide3.png';


function Viewer() {
    return (
        <div>
            <div className="products_header">
                Our Products
            </div> 
            <div className="view__images">
            <Carousel fade>
                <Carousel.Item>
                <Image src={img1} width="100%" height="100%" className="image_view" />      
                </Carousel.Item>
                <Carousel.Item>
                <Image src={img3} width="100%" height="100%" className="image_view"/>
  
                </Carousel.Item>
                <Carousel.Item>
                <Image src={img2} width="100%" height="100%" className="image_view"/>

                </Carousel.Item>
                </Carousel>
  
            </div>
            {/* <Button className='view__button' variant="primary" href="/OurWork">See all products</Button> */}
        </div>
    )
}

export default Viewer;
