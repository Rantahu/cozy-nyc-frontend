import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getItem} from '../actions/items/get';
import {connect} from 'react-redux';

@connect((state) => {
  return {item: state.items.activeitem};
})
class Item extends Component {
  componentWillMount() {
    this.props.dispatch(getItem(this.props.params.itemid))
  }

  render() {

    const {item} = this.props;

    if (!item)
      return null;
    return (
      <div>
        <div className='six columns'>
          <img src={item.image}/>
        </div>
        
        <div id="content" className="six columns">
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
          <h3>Designer</h3>
          <h3>{item.location}</h3>
          <h3>{item.description}</h3>
          <h3>{item.materal}</h3>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    );
  }
};

export default Item;
