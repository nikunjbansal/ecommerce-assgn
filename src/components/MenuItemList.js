import React from 'react';

import ItemListWrapper from './ItemListHOC'

const MenuItemList = props => (
	<div className="menu">
		<div className="menuheader">
			<h4>Delicacio</h4>
		</div>
	{
		props.items.map(item =>(
				<div className="item" key={"menu"+item.id}>
					<img width={100} height={75} src={item.image} />
					<p>{item.desc}></p>
					<button onClick = {props.actions.onAddItem}>ADD TO CART</button>
				</div>
			)
		)
	}
	</div>											
)

export default MenuItemList;