import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getItem} from '../actions/items/get';
import {connect} from 'react-redux';

@connect((store) => {
   return {
      items: store.items.items,
      itemsFetched: store.items.fetched,
   };
})
class Item extends Component {
  componentDidMount() {
    const {dispatch, params: {
        itemid
      }} = this.props;
    dispatch(getItem(itemid));
  }

  render() {
    const {item} = this.props;
    if (!item)
      return null;
    return (
      <div>
        <h3>{item.item_name}</h3>
        <h3>${item.price}
          Size {item.size}</h3>
        <h3>{item.location}</h3>
        <h3>{item.description}</h3>
        <button>Buy Now</button>
      </div>
    );
  }
};

export default Item;
