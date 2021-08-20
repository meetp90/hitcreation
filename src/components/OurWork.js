import React from 'react'
import Navbar from './Navbar'
import Products from './products'
import Bottom from './Bottom'
import '../scss/OurWork.scss'
import {Image} from 'react-bootstrap'
import img1 from "../images/products/1.jpg"
import img2 from "../images/products/2.jpg"
import img3 from "../images/products/3.jpg"
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";



function OurWork() {
    
    return (
        <div>
            <Navbar />
            <div className='OurWork'>
            <Row gutter={40} >
                <Col span={4}><div className="OurWork__title">Mens</div></Col>
                <Col span={4}><div className="OurWork__title">Womens</div></Col>
                <Col span={4}><div className="OurWork__title">Kids</div></Col>
            </Row>
            <Row gutter={40}>
                <Col span={4}>
                    <a href="/OurWork/Men">
                    <Image src={img1} className="OurWork__image" alt="men"  />
                    </a>
                </Col>
                <Col span={4}>
                    <Image src={img2} className="OurWork__image" alt="Women" />
                </Col>
                <Col span={4}>
                <a href="/OurWork/Kid">
                    <Image src={img3} className="OurWork__image" alt="Kids" />
                    </a>
                </Col>
            </Row>
            </div>
            <Bottom />  
        </div>
    )  
}

export default OurWork;