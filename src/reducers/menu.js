
let items = [

]

const menu = (state=items, action) => {
	switch(action.type) {
		case 'FETCH_ITEMS' : {
			return [
				...action.data
			]
		}
		case 'ADD_TO_CART' : {
			return state;
		}
		case 'ITEM_EDITED' : {
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
