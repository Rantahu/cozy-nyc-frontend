import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Auth/User Reducers
import authReducer from './reducer-auth';
import usersReducer from './reducer-users';

// Boards Reducers

// Radio Reducers
import channelsReducer from './radio/channels';

// Shop Reducers
import CategoryReducer from './shop/categories';
import ItemReducer from './shop/items';
import cartReducer from './shop/cart';

const allReducers = combineReducers({
   categories: CategoryReducer,
   items: ItemReducer,
   form: formReducer,
   cart: cartReducer,

   // Users/auth
   users: usersReducer,
   auth: authReducer,

   // Radio
   channels: channelsReducer,
});

export default allReducers;
