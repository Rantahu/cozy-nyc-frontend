import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ItemQuery from '../components/itemquery';


const Store = () => {
   return (
     <div>
      <div>
        <ItemQuery />
      </div>
    </div>
   );
};

export default Store;
