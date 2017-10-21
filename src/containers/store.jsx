import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Navbar from '../components/navbar';
import ItemQuery from '../components/itemquery';


const Store = () => {
   return (
     <div>
      <header>
        <Navbar />
      </header>
      <div>
        <ItemQuery />
      </div>
    </div>
   );
};

export default Store;
