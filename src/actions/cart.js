import userService from '../services/user';
import orderService from '../services/order';

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

export function setPaymentMethod(value) {
  return {
    type: "SET_PAYMENT_METHOD",
    value
  }
}

export function confirmOrder() {
  return (dispatch, getState) => {
    const { cart } = getState();
    const { user, address } = getState().user;

    const orderItems = cart.items.map(item => ({
      pizza_id: item.pizza.id,
      qty: item.qty,
      total: item.pizza.price * item.qty,
      preferences: item.preferences
    }));

    const orderData = {
      payment_method_id: cart.paymentMethod,
      sub_total: cart.totalCart,
      delivery_cost: cart.deliveryCost,
      total: cart.totalCart + cart.deliveryCost,
      items: orderItems
    };

    let userId;
    let addressId;

    if (!user.id) {
      userService.register({
        name: user.fullName,
        email: user.email,
        password: null,
        phone_number: user.phoneNumber
      }).then(res => {
        userId = res.data.user.id;

        userService.createAddress({
          user_id: userId,
          street: address.street,
          number: address.number || null,
          complement: address.complement || null,
          city: address.city,
          state: address.state,
          zip_code: address.zipCode
        }).then(res => {
          addressId = res.data.address.id;

          orderService.createOrder({
            ...orderData,
            user_id: userId,
            address_id: addressId,
          }).then(() => {
            dispatch({
              type: "CONFIRM_ORDER"
            })
          });
        })
      });
    } else {
      orderService.createOrder({
        ...orderData,
        user_id: user.id,
        address_id: address.id,
      }).then(() => {
        dispatch({
          type: "CONFIRM_ORDER"
        })
      });
    }

    dispatch(toggleOrderSuccessDialog());
  }
}

export function toggleOrderSuccessDialog() {
  return {
    type: "TOGGLE_ORDER_SUCCESS_DIALOG"
  }
}