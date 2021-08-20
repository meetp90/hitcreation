import React from 'react';
import Shirt from "./mens-products/Shirt"
import Navbar from "../Navbar"
import Bottom from '../Bottom.js';
import { Route } from 'react-router';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import { Image } from 'react-bootstrap';
import img1 from "../../images/products/1.jpg"
import img2 from "../../images/products/2.jpg"
import img3 from "../../images/products/3.jpg"

function Mensproducts(){
    return(
        <div>
            <Navbar />
            <div className='OurWork'>
            
                    <Row gutter={40}>
                        <Col span={4}>
                            <a href="/OurWork/Men/Shirt">
                            <Image src={img1} className="OurWork__image" alt="Shirt"  />
                            </a>
                        </Col>
                        <Col span={4}>
                            <Image src={img2} className="OurWork__image" alt="Women" />
                        </Col>
                        <Col span={4}>
                            <Image src={img3} className="OurWork__image" alt="Kids" />
                        </Col>
                    </Row>
                    <Row gutter={40}>
                        <Col span={4}>
                            <a href="/OurWork/Men/Shirt">
                            <Image src={img1} className="OurWork__image" alt="Shirt"  />
                            </a>
                        </Col>
                        <Col span={4}>
                            <Image src={img2} className="OurWork__image" alt="Women" />
                        </Col>
                        <Col span={4}>
                            <Image src={img3} className="OurWork__image" alt="Kids" />
                        </Col>
                    </Row>
                    <Row gutter={40}>
                        <Col span={4}>
                            <a href="/OurWork/Men/Shirt">
                            <Image src={img1} className="OurWork__image" alt="Shirt"  />
                            </a>
                        </Col>
                    </Row>
                    </div>
            <Bottom />  
        </div>
    )
}

export default Mensproducts;