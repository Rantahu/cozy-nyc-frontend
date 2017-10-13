import React from 'react';
import { Link } from 'react-router'

const ItemBox= (props) => {

   var id = parseInt(props.id);
   var url = '/s/'+id;

   return (
      <Link to={{ pathname: url }} activeClassName="active">
         <div className="item-block">
            <img src={ props.image } />
            <h3>{ props.name }</h3>
            <h3>Designer</h3>
            <h3>${ props.price }</h3>
         </div>
      </Link>
  );
};

export default ItemBox;
