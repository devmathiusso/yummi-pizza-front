const INITIAL_STATE = {
  items: [],
  isCartOpen: false,
  totalCart: 0,
  deliveryCost: 5,
  paymentMethod: '1',
  orderSuccessDialog: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PIZZA_TO_CART":
      return {
        ...state,
        items: [
          ...state.items,
          { qty: action.qty, pizza: action.pizza, preferences: action.preferences },
        ],
        totalCart: state.totalCart + (action.qty * action.pizza.price)
      };

    case "CHANGE_IS_CART_OPEN":
      return {
        ...state,
        isCartOpen: action.isCartOpen
      }

    case "CHANGE_ITEM_QTY":
      const cartItems = state.items;
      cartItems[action.itemIndex].qty = action.newQty;

      return {
        ...state,
        items: cartItems
      }

    case "REMOVE_ITEM_FROM_CART":
      const newCartItems = state.items.filter((_, index) => index !== action.itemIndex);
      
      return {
        ...state,
        items: newCartItems
      }

    case "CHANGE_TOTAL_CART":
      const { pizza, qty } = state.items[action.itemIndex];

      let price = pizza.price;

      if (action.removeFromCart) {
        price *= qty;
      }

      return {
        ...state,
        totalCart: state.totalCart + (price * action.multiplicator)
      }
    case "SET_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.value
      }

    case "CONFIRM_ORDER":
      return {
        ...INITIAL_STATE,
        orderSuccessDialog: true
      };

    case "TOGGLE_ORDER_SUCCESS_DIALOG":
      return {
        ...state,
        orderSuccessDialog: !state.orderSuccessDialog
      }

    default:
      return state;
  }
}
