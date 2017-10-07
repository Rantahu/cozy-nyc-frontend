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

      const mappedItems = items.map(item => <li key={ item.id }><ItemBox
         id={ item.id }
         name={ item.name }
         price={ item.price }
         /></li>)

      return (
         <ul>
            {mappedItems}
         </ul>

      );
   }
}
