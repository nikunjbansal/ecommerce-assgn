import React from 'react'

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Admin from '../components/Admin';

var api = require('../api').api

const mapStateToProps = (state) => {
	return {
		menu: state.ecommerce.menu,
		theme: state.ecommerce.theme
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			fetchItems: () => {
				api.get()
					.then(data => 
						dispatch({type: 'FETCH_ITEMS', data: data})
					)
					.catch((er) => console.log(er))
			},
			onEditItemPrice: (item, price) => {
			  api
				.put(item.id, {...item, ...{price: price}})
				.then(data=>(
					dispatch({
						type: 'ITEM_EDITED', 
						data: {item: item, price: price}
					})
				))
				.catch(er=>console.log(er)
			  )
			},
			redirectTo: (path) => {
				dispatch(push(path))
			},
			changeThemeColor: (color) => {
				dispatch({type: 'CHANGE_BUTTON_COLOR', data: color})
			}
		}
	}
}

class AdminContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.actions.fetchItems()
	}

	render() {
		return <Admin {...this.props} />
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(AdminContainer)