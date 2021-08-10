import React from 'react';
import Shirt from "./mens-products/Shirt"
import Navbar from "../Navbar"
import Bottom from '../Bottom.js';
import { Route } from 'react-router';



function mensproducts(){
    return(
        <div>
            
                <Route path="/OurWork/Men/Shirt">
                    <Shirt />
                </Route>
            
        </div>
    )
}

export default mensproducts;