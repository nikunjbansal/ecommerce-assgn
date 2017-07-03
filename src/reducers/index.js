import { combineReducers } from 'redux'
import menu from './menu'
import cart from './cart'

const ecommerce = combineReducers({
  menu,
  cart
})

export default ecommerce
