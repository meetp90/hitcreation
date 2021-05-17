import React from 'react'
import Navbar from './Navbar'
import Products from './products'
import '../scss/OurWork.scss'
function OurWork() {
    return (
        <div>
            <Navbar />
            <div className='OurWork'>
                <br></br><br></br><br></br>
                <Products />
            </div>
        </div>
    )  
}

export default OurWork;