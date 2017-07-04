import React from 'react'

import Header from './Header';
import MenuItemList from './MenuItemList';
import CartItemList from './CartItemList';

import { Route } from 'react-router'

export default class Home extends React.Component {
	
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.actions.fetchItems();
	}
	render() {
		return (
			<div>
				<Header {...this.props} />
				<div className="container">
					<div className="content">
						{ MenuItemList( {...this.props} ) }
						{ CartItemList( {actions: {...this.props.actions}, items: this.props.cart, theme: this.props.theme} ) }
					</div>
				</div>
			</div>
		)	
	}
}