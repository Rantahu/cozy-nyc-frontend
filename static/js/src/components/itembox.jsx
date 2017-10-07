import React from 'react';
import { Link } from 'react-router'

const ItemBox= (props) => {

   var id = parseInt(props.id);
   var url = '/s/'+id+'/jawns';

   return (
      <Link to={`/s/${props.id}/jawns`} activeClassName="active">
         <div>
            <h3>{ props.name }</h3>
            <h3>${ props.price }</h3>
         </div>
      </Link>
  );
};

export default ItemBox;
