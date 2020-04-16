import {
  GET_ALL_PRODUCT_ITEMS,
  SET_LOADING,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  PLACE_ORDER,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_ITEMS:
      return { ...state, products: action.payload, loading: false };

    case SET_LOADING:
      return { ...state, loading: true };

    case ADD_TO_CART:
      const addedProduct = state.products.find((p) => p.id === action.payload);
      return { ...state, cart: [...state.cart, { ...addedProduct }] };

    case REMOVE_CART_ITEM:
      const copiedCartAr = [...state.cart];
      const checkId = copiedCartAr.findIndex((c) => c.id === action.payload);
      if (checkId !== -1) {
        copiedCartAr.splice(checkId, 1);
        return { ...state, cart: copiedCartAr };
      }
      return { ...state };

    case PLACE_ORDER:
      return { ...state, loading: false, cart: [] };

    default:
      return { ...state };
  }
};
