
let items = [
	{id: 1, desc: 'Hamburger', image: 'hamburger.jpg', price: '200$'}
]

const menu = (state=items, action) => {
	switch(action.type) {
		case 'ADD_TO_CART' : {
				return state;
		}
		default :
			return state
	}
}

export default menu;
