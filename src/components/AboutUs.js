import React from 'react'
import Navbar from './Navbar'
import {Image,Card,CardDeck } from "react-bootstrap"
import Owner from '../images/motapapa.jpg'
import Bottom from "./Bottom"
import '../scss/AboutUs.scss';
import sh from "../images/customers/shruti.jpg"
import rp from "../images/customers/ramdas_padhye.jpg"
import yk from "../images/customers/yashoda_sunil_kothari.jpg"
import pi from "../images/customers/pia.jpg"
import ek from "../images/customers/ekta.jpg"
import sa from "../images/customers/sachiel.jpg"
import po from "../images/customers/pooja.jpg"
import pa from "../images/customers/padmi.jpg"

var bgColors = { "Default": "#FFFFFF",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

function AboutUs() {
    return (
    <>
        <Navbar />
        <div className="About"> 
            <div className="About__owner">
                <Image src={Owner} alt="owner" className="About__image" rounded  width="14%" />
                <div className="text-left About__content" >
                Hit Creation is a platform for establishing custom-fitted clothing & tailoring services for its clients anytime, anywhere. 
                We help our customers to personalize their tailoring needs online by assisting them with style elements and garment fitting.
                </div>
            </div>
                <h1 className="About__review--header">
                    Customer Reviews    
                </h1>
                <div className="About__review">
                <CardDeck>
                    <Card style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image  src={rp} style={{marginLeft:"20%"}}  height="350" width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}}  className="text-center" > Ramdas Padhye </Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        HIT Creations is one of the best tailors specially because he stitches clothes for our puppets which are small in size and there are certain peculiar things which are needed to stitch those costumes. But they stitch it to perfection keeping the style in mind and making it look beautiful and elegant even when the size is small. We love the detailing they do specially in our puppet costumes.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image  src={yk} style={{marginLeft:"20%"}}   width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}} className="text-center" >Yasoda and Sunil Kothari</Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        Hit creation is responsible for making all my parties n gatherings a big hit 😃
The reason I have been wearing his customised clothes are for his well stitched, intricately designed and trendy clothes.
Thank u Hiteshbhai for always being our friend in need for our last minute parties.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image  src={sh} style={{marginLeft:"20%"}}   width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}} className="text-center" >Shruti Vyas</Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        I have been getting my outfits customised from hit creations  from last 8 year's. I'm now so used to there designing n fittings that I don’t think I will ever be comfortable with any other designers. They are really best at what they do. Also I got all my wedding outfits designed from them. All the best for your future work 👍🏻
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                    <br></br>
                    <CardDeck>
                    <Card style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image  src={pi} style={{marginLeft:"20%"}}   width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}} className="text-center"> Chandani </Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        Best tailors for kids in the vicinity!
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image  src={ek} style={{marginLeft:"20%"}}   width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}} className="text-center"> Ekta Shekar </Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        Love the fitting of the outfit. It is absolutely comfortable and has perferct fitting
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image  src={sa} style={{marginLeft:"20%"}}   width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}} className="text-center"> Sachiel Shekar </Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        Thank you for the lovely outfit and having the patience with nautanki about fittings
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                    <br></br>
                    <CardDeck>
                    
                    <Card className="card" style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image src={po} style={{marginLeft:"20%"}}   width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}} className="text-center"> Pooja Upadhyay </Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        I am in touch with Hit Creations from last 6-7 years and I am truly satisfied with the work and designs. He helps to make us feel different in every occasion. Thank you for making us look fabulous.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card" style={{backgroundColor:bgColors.Default}} border='light'>
                        <Image src={pa} style={{marginLeft:"20%"}}   width="250" className="text-center" />
                        <Card.Body>
                        <Card.Title  style={{fontSize:20,fontWeight:"bold"}} className="text-center"> Padmi</Card.Title>
                        <Card.Text style={{fontSize:16}}>
                        I'm fully satisfied with your excellent work. I like your designing and that's why I don't bother much for the designing part because I know it will be great! I was so relaxed after having a designer like you. Keep it Up.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    
                    </CardDeck>
                </div>
                
        </div>
        <Bottom />
    </>
    );
}
export default AboutUs;
