let cartStorage = JSON.parse(localStorage.getItem('YummiPizza@cart'));

const BLANK_CART = {
  items: [],
  isCartOpen: false,
  totalCart: 0,
  deliveryCost: 5,
  paymentMethod: '1',
  orderSuccessDialog: false
};

const INITIAL_STATE = cartStorage ? cartStorage : BLANK_CART;

export default function(state = INITIAL_STATE, action) {
  let newState;

  switch (action.type) {
    case "ADD_PIZZA_TO_CART":
      newState = {
        ...state,
        items: [
          ...state.items,
          { qty: action.qty, pizza: action.pizza, preferences: action.preferences },
        ],
        totalCart: state.totalCart + (action.qty * action.pizza.price)
      };

      setCartOnLocalStorage(newState);

      return newState;

    case "CHANGE_IS_CART_OPEN":
      newState = {
        ...state,
        isCartOpen: action.isCartOpen
      };

      setCartOnLocalStorage(newState);
      
      return newState;

    case "CHANGE_ITEM_QTY":
      const cartItems = state.items;
      cartItems[action.itemIndex].qty = action.newQty;

      newState = {
        ...state,
        items: cartItems
      };

      setCartOnLocalStorage(newState);
      
      return newState;

    case "REMOVE_ITEM_FROM_CART":
      const newCartItems = state.items.filter((_, index) => index !== action.itemIndex);
      
      newState = {
        ...state,
        items: newCartItems
      };

      setCartOnLocalStorage(newState);
      
      return newState;

    case "CHANGE_TOTAL_CART":
      const { pizza, qty } = state.items[action.itemIndex];

      let price = pizza.price;

      if (action.removeFromCart) {
        price *= qty;
      }

      newState = {
        ...state,
        totalCart: state.totalCart + (price * action.multiplicator)
      };

      setCartOnLocalStorage(newState);
      
      return newState;

    case "SET_PAYMENT_METHOD":
      newState = {
        ...state,
        paymentMethod: action.value
      };

      setCartOnLocalStorage(newState);
      
      return newState;

    case "CONFIRM_ORDER":
      newState = {
        ...BLANK_CART,
        orderSuccessDialog: true
      };

      setCartOnLocalStorage(newState);
      
      return newState;

    case "TOGGLE_ORDER_SUCCESS_DIALOG":
      newState = {
        ...state,
        orderSuccessDialog: !state.orderSuccessDialog
      };

      setCartOnLocalStorage(newState);
      
      return newState;

    default:
      return state;
  }
}

const setCartOnLocalStorage = data => {
  localStorage.setItem('YummiPizza@cart', JSON.stringify(data));
}