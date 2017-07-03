import { connect } from 'react-redux';

import MenuItemList from '../components/MenuItemList';

const mapStateToProps = (state) => {
	return {
		items: state.menu,
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			onAddItem: item => {
				dispatch({type: 'ADD_TO_CART', data: item})
			},
			onRemoveItem: item => {
				dispatch({type: 'REMOVE_FROM_CART', data: item})
			}
		}
	}
}

const ConnectedMenuList = connect(
	mapStateToProps,
	mapDispatchToProps
  )(MenuItemList)

export default ConnectedMenuList
