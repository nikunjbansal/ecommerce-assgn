import { combineReducers } from 'redux'

import menu from './menu'
import cart from './cart'
import theme from './theme'

const ecommerce = combineReducers({
  menu,
  cart,
  theme
})

export default ecommerce
