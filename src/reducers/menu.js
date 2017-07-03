
let store = {
	items: [
		{id: 1, desc: 'product', image: 'hamburger.jpg'}
	],
	cart: []
}

const main = (state=store, action) => {
	switch(action.type) {
		case 'ADD_TO_CART' : {
			let cart = [
				...state.cart,
				state.items.filter((item)=>(item.id == action.data))
			]
			return {
					...state,
					cart
				}
		}
		default : 
			return state
	}
}

export default main;