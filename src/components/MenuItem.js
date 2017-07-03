import React from 'react';

const addToCartButton = props => {
    let clickHandler = props.actions.onAddItem;
    let text = 'ADD TO CART';

    // Check if the item is already added in cart
    let addedItem = props.cart.filter(item=>item.id == props.item.id);

    if(addedItem.length != 0) {
        //Item already present in Cart
        clickHandler = props.actions.onRemoveItem;
        text = 'REMOVE FROM CART'
    }

    return <button onClick={()=>clickHandler(props.item)}>{text}</button>
}

const MenuItem = props => {

    let button = addToCartButton(props);

    return (
      <div className="item">
        <img width={100} height={75} src={props.item.image} />
        <p>{props.item.desc}</p>
        {button}
      </div>
    );

}

export default MenuItem;
