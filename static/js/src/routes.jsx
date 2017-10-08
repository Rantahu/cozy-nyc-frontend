import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "./containers/app";
import Dashboard from "./containers/dashboard";
import Home from "./containers/home"
import About from "./containers/about";
import Item from "./containers/itemdetail";
import Error404 from './components/404-error'
import RequireAuth from './components/auth/require-auth'
import Register from './components/auth/register';
import Login from './components/auth/login';
import Sell from './containers/sell';
import Contact from './containers/contact';
import Store from './containers/store';
import Checkout from './containers/checkout';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    // Static Pages
    <Route path="about" component={About}/>

    // Shop Pages
    <Route path="s" component={Store} />
    <Route path="s/sell" component={Sell}/>
    <Route path="s/checkout" component={Checkout}/>
    <Route path="s/:itemid" component={Item}/>

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
