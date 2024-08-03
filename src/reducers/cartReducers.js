import {
  CART_ADD_ITEM, 
  CART_REMOVE_ITEM
} from "../constants/cartConstants";

export const cartReducer = (state={cartItems: []}, action) => {
  switch(action.type) {
    case CART_ADD_ITEM:
      // check if product exist
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.product === item.product);

      // update the cart items item if it exist in local storage else add it to the object
      if(existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => 
            x.product === existItem.product ? item: x
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload)
      }
    default:
      return state
  }
}
