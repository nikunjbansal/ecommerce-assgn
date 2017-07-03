
const cart = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
        return [
            ...state,
            {id: action.data.id, item: action.data, count: 1}
        ]
    }
    case 'REMOVE_FROM_CART' : {
        return state.filter(item=>item.id != action.data.id)
    }
    case 'SET_ITEM_COUNT': {
        return state.map(item=>{
            if(item.id == action.data.item.id) {
                item.count = parseInt(action.data.value)
            }
            return item;
        })
    }

      break;
    default:
      return state
  }
}

export default cart;
