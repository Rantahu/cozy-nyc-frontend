import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import CategoryReducer from './reducer-categories';
import ItemReducer from './reducer-items';
import authReducer from './reducer-auth';
import cartReducer from './reducer-cart';

const allReducers = combineReducers({
   categories: CategoryReducer,
   items: ItemReducer,
   auth: authReducer,
   form: formReducer,
   cart: cartReducer
});

export default allReducers;
