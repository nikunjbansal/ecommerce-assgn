import { connect } from 'react-redux';

import CartItemList from '../components/CartItemList';

const mapStateToProps = (state) => {
	return {
		items: state.cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			setItemCount: (item, value) => {
				dispatch({type:'SET_ITEM_COUNT', data: {item: item, value: value}})
			},
			onCheckout: () => {
				dispatch({type: 'CHECKOUT'})
			}
		}
	}
}

const ConnectedCartList = connect(
	mapStateToProps,
	mapDispatchToProps
  )(CartItemList)

export default ConnectedCartList
