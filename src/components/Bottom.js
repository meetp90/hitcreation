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
                <a className="Footer__address" href="https://goo.gl/maps/ZvbkfcT3itS3uUnN6">
                    Shop No. 15, Neelkanth Market, Oghadhbhai Lane, Mahatma Gandhi Rd, behind Pooja Hotel, Ghatkopar(E), Mumbai, 400077
                </a>
                <a className="Footer__logo" href="http://">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className="Footer__logo" href="http://">
                <ion-icon name="logo-facebook"></ion-icon>
                </a>    
                <a className="Footer__phone " href="tel:+919920382464">9920382464</a>            
            </ol>
            </div>
            </div>
        )
    }

}
export default Bottom



{/* <div className="Footer">
<Image src={img} alt="img" width="30%" height="30%" />
            <ol>
                <a className="Footer__address" href="https://goo.gl/maps/ZvbkfcT3itS3uUnN6">
                    Shop No. 15, Neelkanth Market, Oghadhbhai Lane, Mahatma Gandhi Rd, behind Pooja Hotel, Ghatkopar(E), Mumbai, 400077
                </a>
                <a className="Footer__logo" href="http://">
                <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a className="Footer__logo" href="http://">
                <ion-icon name="logo-facebook"></ion-icon>
                </a>    
                <a className="Footer__phone " href="tel:+919920382464">9920382464</a>            
            </ol>
            </div> */}

