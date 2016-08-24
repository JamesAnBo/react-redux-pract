const combineReducers = require('redux').combineReducers
const initialState = require('../state')

const productReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('this is the state', state)
      var product = state[action.payload.productId]
      var updatedProduct = Object.assign({}, product, { stock: product.stock -1 } )
      var update = {}
      update[product.id] = updatedProduct
      return Object.assign({}, state, update)
    case 'REMOVE_FROM_CART':
      console.log('Adding back to the stock');
      var product = state[action.payload.productId]
      var updatedProduct = Object.assign({}, product, { stock: product.stock +1 } )
      var update = {}
      update[product.id] = updatedProduct
      return Object.assign({}, state, update)
    default:
      return state
  }
}


const cartReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload.productId]
    case 'REMOVE_FROM_CART' :
      console.log('Removing item from cart');
    return  [ ...state.slice(0,state.indexOf(action.productId),
         ...state.slice(state.indexOf(action.productId)+1))
     ]
    default:
      return state
  }
}


const totalReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state + action.payload.price
    case 'REMOVE_FROM_CART' :
    console.log('Removing price from total');
        return state - action.payload.price
    default:
      return state
  }
}



module.exports = (state=initialState, action) => {
  return {
    products: productReducer(state.products, action),
    cart: cartReducer(state.cart, action),
    total: totalReducer(state.total, action)
  }
}
