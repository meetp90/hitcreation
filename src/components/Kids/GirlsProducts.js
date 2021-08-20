import React from 'react'
import Navbar from "../Navbar"
import Bottom from '../Bottom.js';
import { Route } from 'react-router';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { Image } from 'react-bootstrap';
import img1 from "../../images/products/1.jpg"
import img2 from "../../images/products/2.jpg"
import img3 from "../../images/products/3.jpg"



function GirlsProducts() {
    return (
        <div>
            <div className='OurWork'>
            <Navbar/>
            <Row gutter={40}>
                <Col span={4}>
                    <a href="/OurWork/Kid/Girl/Frock">
                    <Image src={img1} className="OurWork__image" alt="Shirt"  />
                    </a>
                </Col>
                <Col span={4}>
                <a href="/OurWork/Kid/Girl/Gawn">
                    <Image src={img2} className="OurWork__image" alt="Gawn" />
                    </a>
                </Col>
                <Col span={4}>
                <a href="/OurWork/Kid/Girl/Dress">
                    <Image src={img3} className="OurWork__image" alt="Dress" />
                    </a>
                </Col>
            </Row>
            <Row gutter={40}>
                <Col span={4}>
                    <a href="/OurWork/Kid/Girl/Chaniyacholi">
                    <Image src={img1} className="OurWork__image" alt="Chaniyacholi"  />
                    </a>
                </Col>
                <Col span={4}>
                <a href="/OurWork/Kid/Girl/Dhotisuit">
                    <Image src={img2} className="OurWork__image" alt="DhotiSuit" />
                    </a>
                </Col>
                <Col span={4}>
                <a href="/OurWork/Kid/Girl/NightWear">
                    <Image src={img3} className="OurWork__image" alt="Nightwear" />
                </a>
                </Col>
            </Row>
            <Row gutter={40}>
                <Col span={4}>
                    <a href="/OurWork/Kid/Girl/Halfpant">
                    <Image src={img1} className="OurWork__image" alt="Halfpant"  />
                    </a>
                </Col>
            </Row>
            </div>
    <Bottom />            
        </div>
    )
}

export default GirlsProducts;
