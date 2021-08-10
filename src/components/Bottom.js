import React from 'react'
import "../scss/Footer.scss"
import {Image} from 'react-bootstrap'

import img from '../images/meet4.png'


class Bottom extends React.Component{
    render(){
        return(
            <div>
                <div className="Footer">
<Image src={img} alt="img" width="30%" height="30%" />
            <ol>
                <li>
                    <a className="Footer__links" href="/">Homepage</a>
                </li>
                <li >
                <a className="Footer__links" href="/OurWork">Our Work</a>
                </li>
                <li >
                <a className="Footer__links" href="/pricing">Pricing</a>
                </li>
                <li >
                <a  className="Footer__links" href="/AboutUs">About Us</a>
                </li>
            </ol>
            <ol>
                <li>
                <a className="Footer__address--phone" href="https://goo.gl/maps/ZvbkfcT3itS3uUnN6">
                    Address
                </a>
                <a className="Footer__address" href="https://goo.gl/maps/ZvbkfcT3itS3uUnN6">
                    Shop No. 15, Neelkanth Market, Oghadhbhai Lane, Mahatma Gandhi Rd, behind Pooja Hotel, Ghatkopar(E), Mumbai, 400077
                </a>
                </li>
                <li>
                <a className="Footer__phone" href="tel:+919920382464">9920382464</a>
                </li>
                <br></br>
                <li>
                <a className="Footer__logo1" href="https://www.instagram.com/hitcreations/">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>
                
                <li>
                <a className="Footer__logo2" href="https://www.facebook.com/hitcreation/">
                <ion-icon name="logo-facebook"></ion-icon>
                </a>
                </li>    
                            
            </ol>
            </div>
            </div>
        )
    }

}
export default Bottom





