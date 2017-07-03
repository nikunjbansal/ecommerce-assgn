import React from 'react'
import CartItem from './CartItem'

const getCartList = props => {
		if(props.items.length == 0) {
			return (
					<div className="item">
						No Item Added
					</div>
			)
		} else {
			return (
				props.items.map(item => (
					<CartItem
						 key={"cart"+item.id}
						 item={item}
						 actions={props.actions}
					 />
				 ))
			);
		}
}

const getTotalCartPrice = items => {
		return items.map(
				item => item.count*item.item.price
			).reduce((sum, value) => (sum+value), 0)
}

const checkout = () => {
	console.log("checkout");
}

const CartItemList = props => (
	<div className="cart">

		{ getCartList(props) }

		<div className="item right">
			<p>Total:</p>
			{ getTotalCartPrice(props.items) }
		</div>

		<div className="item">
			<button
				onClick={()=>(
					getTotalCartPrice(props.items) == 0
					? ''
					: props.actions.onCheckout()
				)}
			>CHECKOUT</button>
		</div>

	</div>
)

export default CartItemList;
