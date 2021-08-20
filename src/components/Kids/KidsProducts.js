import React from 'react'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import Navbar from '../Navbar'
import {Image} from 'react-bootstrap'
import img1 from "../../images/products/1.jpg"
import img2 from "../../images/products/2.jpg"
import img3 from "../../images/products/3.jpg"
import Bottom from '../Bottom'
function KidsProducts() {
    return (
        <div>
          <Navbar />
            <div className='OurWork'>
            <Row gutter={40}>
                <Col span={6}>
                    <a href="/OurWork/Kid/Boy">
                    <Image src={img1} className="OurWork__image" alt="men"  />
                    </a>
                </Col>
                <Col span={6}>
                    <a href="/OurWork/Kid/Girl">
                    <Image src={img2} className="OurWork__image" alt="Women" />
                    </a>
                </Col>
            </Row>
            </div>
            <Bottom />     
        </div>
    )
}

export default KidsProducts;
