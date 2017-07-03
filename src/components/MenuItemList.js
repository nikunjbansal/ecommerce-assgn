import React from 'react';

import MenuItem from './MenuItem'

const MenuItemList = props => (
	<div className="menu">
		<div className="menuheader">
			<h4>Delicacio</h4>
		</div>
	{
		props.items.map(item =>(
			<MenuItem
				key={'menu'+item.id}
				item={item}
				actions={props.actions}
				{...props}
			/>
		))
	}
	</div>
)

export default MenuItemList;
