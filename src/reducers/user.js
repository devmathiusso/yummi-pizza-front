const INITIAL_STATE = {
  user: {},
  address: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_USER_CONTACT":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.contactData
        }
      }

    case "SET_USER_ADDRESS":
      return {
        ...state,
        address: {
          ...state.address,
          ...action.addressData
        }
      }

    default:
      return state;
  }
}
