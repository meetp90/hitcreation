import React from 'react'
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import {Row,Col} from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css";
import "../scss/Viewer.scss"
import {Button} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import img1 from '../images/products/1.jpg';
import img2 from '../images/products/2.jpg';
import img3 from '../images/products/3.jpg';


function Viewer() {
    return (
        <div>
            <div className="products_header">
                Our Products
            </div> 
            <div className="view__images">
                <Image src={img1} width="30%" className="image_view" />
                <Image src={img2} width="30%" className="image_view"/>
                <Image src={img3} width="30%" className="image_view"/>
            </div>
            <Button className='view__button' variant="primary" href="/OurWork">See all products</Button>
        </div>
    )
}

export default Viewer;
