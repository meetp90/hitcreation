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
import Mensproducts from './Men/Mensproducts';
import KidsProducts from './Kids/KidsProducts';
import GirlsProducts from './Kids/GirlsProducts';
import Frock from "./Kids/Girls/Frock"
import Gawn from "./Kids/Girls/Gawn"
import Dress from "./Kids/Girls/Dress"
import Chaniyacholi from './Kids/Girls/Chaniyacholi';
import Dhoti from './Kids/Girls/Dhoti'
import Nightwear from './Kids/Girls/Nightwear';
import '../scss/App.scss';
import {Route , BrowserRouter as Router} from 'react-router-dom';
import Halfpant from './Kids/Girls/Halfpant';

export default function App() {
    return (
        
        <Router>
            <Route exact path='/' >
                <Header/>
                <Features/>
                <Viewer />
                {/* <BookNow /> */}
                <Bottom />
            </Route>
            <Route path='/pricing' >
                <Pricing />
            </Route>
            <Route path='/OurWork' exact >
            <OurWork />
            </Route>
            <Route path="/OurWork/Men" exact>
                <Mensproducts />
            </Route>
            <Route path="/OurWork/Kid" exact>
                <KidsProducts />
            </Route>
            <Route path="/OurWork/Kid/Girl" exact>
                <GirlsProducts />
            </Route>
            <Route path="/OurWork/Kid/Girl/Frock" exact>
                <Frock />
            </Route>
            <Route path="/OurWork/Kid/Girl/Gawn" exact>
                <Gawn />
            </Route>
            <Route path="/OurWork/Kid/Girl/Dress" exact>
                <Dress />
            </Route>
            <Route path="/OurWork/Kid/Girl/Chaniyacholi" exact>
                <Chaniyacholi />
            </Route>
            <Route path="/OurWork/Kid/Girl/Dhotisuit" exact>
                <Dhoti />
            </Route>
            <Route path="/OurWork/Kid/Girl/Nightwear" exact>
                <Nightwear />
            </Route>
            <Route path="/OurWork/Kid/Girl/Halfpant" exact>
                <Halfpant />
            </Route>
            <Route path='/AboutUs' >
            <AboutUs />
            </Route>
        </Router>
    );
}
