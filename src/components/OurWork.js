import React from 'react'
import Navbar from './Navbar'
import Products from './products'
import Bottom from './Bottom'
import '../scss/OurWork.scss'
import {Image} from 'react-bootstrap'
import img1 from "../images/products/8.jpg"
import mensproducts from "./Men/mensproducts"

function OurWork() {
    return (
        <div>
            <Navbar />
            <div className='OurWork'>
                {/* <mensproducts /> */}
            </div>
            <Bottom />  
        </div>
    )  
}

export default OurWork;