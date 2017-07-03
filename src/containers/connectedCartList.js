import { connect } from 'react-redux';

import CartItemList from '../components/CartItemList';

const mapStateToProps = (state) => {
	console.log(state.menu);
	return {
		items: state.menu.cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			onAddItem: id => {
				dispatch(()=>{setTimeout(100, () => {console.log('cart has been indulged with...')})})
			}
		}
	}
}

const ConnectedCartList = connect(
	mapStateToProps,
	mapDispatchToProps
  )(CartItemList)

export default ConnectedCartList