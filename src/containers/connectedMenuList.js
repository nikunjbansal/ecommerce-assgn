import { connect } from 'react-redux';

import MenuItemList from '../components/MenuItemList';

const mapStateToProps = (state) => {
	return {
		items: state.menu.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			onAddItem: id => {
				dispatch({type: 'ADD_TO_CART', data: id})
			}
		}
	}
}

const ConnectedMenuList = connect(
	mapStateToProps,
	mapDispatchToProps
  )(MenuItemList)

export default ConnectedMenuList