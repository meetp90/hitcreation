import React from 'react'
import Navbar from './Navbar';


export default function Header() {
    return (
        <>
            <header>
                <div className="header"> 
                    <Navbar />
                    <div className="header__image">

                    </div>
                    {/* <Image src={image2} fluid /> */}
                    <div className="header__main">
                        <h1 className="header__main--title">YOU IMAGINE , WE CREATE</h1> 

                        <h3 className="header__main--subtitle">Bespoke tailoring for entire family </h3>

                        {/* <button className="header__main--button"> Book your appointment now </button> */}
                    </div>
                </div>
            </header>
        </>
    )
}
