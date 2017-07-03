import React from 'react'
import ItemListWrapper from './ItemListHOC'

const CartItemList = props => (
	<div className="cart">
	{
		props.items.map(item =>(
			<div className="item" key={'cart'+item.id}>
				<h3 onClick={()=> props.actions.onAddItem(props.item.id)}>{'wtf!'}</h3>
				<p>{item.desc}</p>
				<p>price</p>
			</div>
		))
	}
	</div>
)

export default CartItemList;

