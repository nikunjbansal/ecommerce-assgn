import React from 'react'
import CartItem from './CartItem'

const CartItemList = props => (
	<div className="cart">
	{
		props.items.map(item => (
			<CartItem
				 key={"cart"+item.id}
			 	 item={item}
				 actions={props.actions}
			 />
		 ))
	}
	</div>
)

export default CartItemList;
