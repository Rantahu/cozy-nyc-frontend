import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ListingQuery from '../components/listingquery';

const Store = () => {
   return (
      <header>
         <ListingQuery />
      </header>
   );
};

export default Store;
