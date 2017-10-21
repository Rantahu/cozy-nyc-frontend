import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getItem} from '../actions/items/get';
import {connect} from 'react-redux';

@connect((store) => {
   return {
      // item: store.items.activeitem
   };
})
class Checkout extends Component {
  componentWillMount() {
    //  this.props.dispatch(getItem(this.props.params.itemid))
  }

  render() {
    // const {item} = this.props;
    // if (!item)
    //   return null;
    return (
      <div>
        <h1>Checkout</h1>
      </div>
    );
  }
};

export default Checkout;
