import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "./containers/app";
import Dashboard from "./containers/dashboard";
import Home from "./containers/home"
import About from "./containers/about";
import Error404 from './components/404-error'
import RequireAuth from './components/auth/require-auth'
import Register from './components/auth/register';
import Login from './components/auth/login';
import Contact from './containers/contact';

// Shop
import Shop from './containers/shop';
import Checkout from './containers/checkout';
import Brand from './containers/brand';
import Sell from './containers/sell';
import Item from "./containers/itemdetail";

// Radio
import RadioHome from './containers/radio/index';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    // Static Pages
    <Route path="about" component={About}/>

    // Shop Pages
    <Route path="shop" component={Shop} />
    <Route path="shop/sell" component={Sell}/>
    <Route path="shop/checkout" component={Checkout}/>
    <Route path="shop/:itemid" component={Item}/>
    <Route path="p/:brandslug" component={Brand}/>

    // Radio Pages
    <Route path="radio" component={RadioHome} />

    // Auth Pages
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>

    //User Pages
    <Route path="dashboard" component={RequireAuth(Dashboard)}/>

    //Support Pages
    <Route path="contact" component={Contact}/>

    // Error pages
    <Route path='*' component={Error404}/>
  </Route>
);
