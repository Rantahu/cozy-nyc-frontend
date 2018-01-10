import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Auth/User Reducers
import userReducer from './user/active-user'
import usersReducer from './users';

// Boards Reducers
import BoardReducer from './boards/board-list';
import ActiveBoard from './boards/active-board';

// Radio Reducers
import ChannelsReducer from './radio/channels';

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
   user: userReducer,
   users: usersReducer,

   // Radio
   channels: ChannelsReducer,

   // Boards
   boards: BoardReducer,
   activeBoard: ActiveBoard
});

export default allReducers;
