import React from 'react';
import  Navbar  from '../../Navbar';
import Bottom  from '../../Bottom';

import { GirlDhotiSuits } from '../kidslist';

import {Row,Col} from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css";
// import {Card,CardDeck} from 'react-bootstrap';
import {Image} from 'react-bootstrap'
import '../../../scss/products.scss'

const Dhoti = () => {
    var counter = 1;
    return (
      <div>
        <Navbar />  
      <div className='product'>
        
        <Row gutter={20} align="middle" justify="center">
      {(GirlDhotiSuits).map(co => 
        <Col xs={{span:12}}
          md={{span:4}} 
        ><Image key={counter++} src={co.image} className="product__images" width="100%" fluid/>
        </Col>
      )}
    </Row>
        
      </div>
      <Bottom />
      </div>
      );
    }
export default Dhoti;

