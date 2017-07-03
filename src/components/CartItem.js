import React from 'react';

const CartItem = props => {
  debugger;
    return (
      <div className="item" key={'cart'+props.item.id}>
        <h3 onClick={()=> props.actions.onAddItem(props.item.id)}>erer</h3>
        <p>{props.item.item.desc}</p>
        <p>{props.item.item.price}</p>
      </div>
    );
}

export default CartItem;
