import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Admin from '../components/Admin';

const mapStateToProps = (state) => {
	return {
		menu: state.ecommerce.menu,
		theme: state.ecommerce.theme
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			onEditItemPrice: (item, price) => {
				dispatch({type: 'ADMIN_EDIT_ITEM', data: {item: item, price: price}})
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

const AdminContainer = connect(
	mapStateToProps,
	mapDispatchToProps
  )(Admin)

export default AdminContainer