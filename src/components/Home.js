import React from 'react'

import Header from './Header';
import MenuItemList from './MenuItemList';
import CartItemList from './CartItemList';

import { Route } from 'react-router'

const Home = props => {
	return (
		<div>
			<Header {...props} />
			<div className="container">
				<div className="content">
					{ MenuItemList( {...props} ) }
					{ CartItemList( {actions: {...props.actions}, items: props.cart, theme: props.theme} ) }
				</div>
			</div>
		</div>
	);
}

export default Home;