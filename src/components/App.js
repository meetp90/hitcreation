import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Features from './Features';
import BookNow from './BookNow';
import Pricing from './Pricing';
import OurWork from "./OurWork";
import AboutUs from './AboutUs'; 
import Viewer from "./Viewer";
import Bottom from "./Bottom";
import '../scss/App.scss';
import {Route , BrowserRouter as Router} from 'react-router-dom';
export default function App() {
    return (
        
        <Router>
            <Route exact path='/' >
                <Header/>
                <Features/>
                <Viewer />
                <BookNow />
                <Bottom />
            </Route>
            <Route path='/pricing' >
                <Pricing />
            </Route>
            <Route path='/OurWork' >
            <OurWork />
            </Route>
            <Route path='/AboutUs' >
            <AboutUs />
            </Route>
        </Router>
    );
}
