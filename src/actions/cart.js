export function addPizzaToCart(pizza, qty, preferences) {
  return {
    type: "ADD_PIZZA_TO_CART",
    qty,
    pizza,
    preferences
  }
}

export function changeIsCartOpen(isCartOpen) {
  return {
    type: "CHANGE_IS_CART_OPEN",
    isCartOpen
  }
}

export function changeItemQty(itemIndex, newQty) {
  return (dispatch, getState) => {
    if (newQty <= 0) {
      return dispatch(removeItemFromCart(itemIndex));
    }

    const { qty } = getState().cart.items[itemIndex];
    let multiplicator = 1;

    if (newQty < qty) {
      multiplicator = -1;
    }

    dispatch(changeTotalCart(itemIndex, multiplicator, false));

    return dispatch({
      type: "CHANGE_ITEM_QTY",
      itemIndex,
      newQty
    })
  } 
}

export function removeItemFromCart(itemIndex) {
  return (dispatch) => {
    dispatch(changeTotalCart(itemIndex, -1, true))

    dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      itemIndex
    })
  }
}

export function changeTotalCart(itemIndex, multiplicator, removeFromCart) {
  return {
    type: 'CHANGE_TOTAL_CART',
    itemIndex,
    multiplicator,
    removeFromCart
  }
}