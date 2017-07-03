
let items = [
	{id: 1, desc: 'Hamburger', image: 'hamburger.jpg', price: 200},
	{id: 2, desc: 'Fries', image: 'hamburger.jpg', price: 100},
	{id: 3, desc: 'Pepsi', image: 'hamburger.jpg', price: 50},
	{id: 4, desc: 'Cola', image: 'hamburger.jpg', price: 50}
]

const menu = (state=items, action) => {
	switch(action.type) {
		case 'ADD_TO_CART' : {
			return state;
		}
		case 'ADMIN_EDIT_ITEM' : {
			return state.map(item=>{
				if(item.id == action.data.item.id) {
					item.price = action.data.price
				}
				return item
			})	
		}
		default :
			return state
	}
}

export default menu;
