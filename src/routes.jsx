import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "./containers/app";
import Dashboard from "./containers/dashboard";
import Home from "./containers/home"
import About from "./containers/about";
import Error404 from './components/404-error'
import Register from './components/auth/register';
import Login from './components/auth/login';
import Contact from './containers/contact';

// Shop
import Shop from './containers/shop';
import Checkout from './containers/checkout';
import Brand from './containers/brand';
import Item from "./containers/itemdetail";

// Radio
import RadioHome from './containers/radio/index';
import Stream from './containers/radio/stream';

// Boards
import BoardsHome from './containers/boards/index';
import Board from './containers/boards/board';
import Thread from './containers/boards/thread';

// Discovery
import DiscoveryHome from './containers/discovery/index'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    // Static Pages
    <Route path="about" component={About}/>

    // Shop Pages
    <Route path="shop" component={Shop} />
    <Route path="shop/checkout" component={Checkout}/>
    <Route path="shop/:itemid" component={Item}/>
    <Route path="p/:brandslug" component={Brand}/>

    // Radio Pages
    <Route path="radio" component={RadioHome} />
    <Route path="radio/:channelname" component={Stream} />

    // Board Pages
    <Route path="boards" component={BoardsHome} />
    <Route path="boards/:boardtag" component={Board} />
    <Route path="boards/:boardtag/:threadid" component={Thread} />

    // Discovery Pages
    <Route path="discovery" component={DiscoveryHome} />

    // Auth Pages
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>

    // User Pages

    //Support Pages
    <Route path="contact" component={Contact}/>

    // Error pages
    <Route path='*' component={Error404}/>
  </Route>
);
