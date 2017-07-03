import React from 'react';

const CartItem = props => {
    return (
      <div className="item" key={'cart'+props.item.id}>
        <input
          type="number"
          min={0}
          value={props.item.count}
          onChange={(e)=>props.actions.setItemCount(props.item, e.target.value)}
        />
        <p>{props.item.item.desc}</p>
        <p>
          ( {props.item.count} x {props.item.item.price} ) = {props.item.count*props.item.item.price}
        </p>
      </div>
    );
}

export default CartItem;
