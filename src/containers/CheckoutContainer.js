import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Checkout from '../components/Checkout';

const mapStateToProps = (state) => {
	return {
		items: state.ecommerce.cart,
		theme: state.ecommerce.theme
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			onCheckout: () => {
				setTimeout(()=>{}, 10)
			},
			redirectTo: (path) => {
				dispatch(push(path))
			}
		}
	}
}

const CheckoutContainer = connect(
	mapStateToProps,
	mapDispatchToProps
  )(Checkout)

export default CheckoutContainer