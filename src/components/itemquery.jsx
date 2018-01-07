import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../actions/items/get';

import ItemBox from './itembox';

@connect((store) => {
   return {
      items: store.items.items,
      itemsFetched: store.items.fetched,
   };
})
export default class ItemQuery extends React.Component {

   componentWillMount() {
      this.props.dispatch(fetchItems())
   }

   render(){

      const { items } = this.props;

      const mappedItems = items.map(item =>
        <div className="three columns"
         key={ item.id }>
         <ItemBox
           id={ item.id }
           image={ item.image }
           name={ item.name }
           price={ item.price }
         /></div>)

      return (
        <div className="row">
            {mappedItems}
        </div>
      );
   }
}
