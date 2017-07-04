import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Home from '../components/Home'

var api = require('../api').api

const mapStateToProps = (state) => {
	return {
		items: state.ecommerce.menu,
		cart: state.ecommerce.cart,
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
			onAddItem: item => {
				dispatch({type: 'ADD_TO_CART', data: item})
			},
			onRemoveItem: item => {
				dispatch({type: 'REMOVE_FROM_CART', data: item})
			},
			setItemCount: (item, value) => {
				dispatch({type:'SET_ITEM_COUNT', data: {item: item, value: value}})
			},
			onCheckout: () => {
				dispatch(push('/checkout'))
			},
			redirectTo: (path) => {
				dispatch(push(path))
			}
		}
	}
}

const HomeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
  )(Home)

export default HomeContainer