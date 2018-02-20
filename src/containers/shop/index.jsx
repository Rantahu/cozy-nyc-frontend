import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ItemQuery from '../../components/shop/itemquery';

/**
 * Main/home page for cozy.nyc shop
 *
 */
const Shop = () => {
   return (
     <div id='feed'>
      <div>
        <ItemQuery />
      </div>
    </div>
   );
};

export default Shop;
