let userStorage = JSON.parse(localStorage.getItem('YummiPizza@user'));
let userAddressStorage = JSON.parse(localStorage.getItem('YummiPizza@userAddress'));
let userChoosenCurrency = localStorage.getItem('YummiPizza@choosenCurrency');

const INITIAL_STATE = {
  choosenCurrency: userChoosenCurrency ? userChoosenCurrency : '£',
  user: userStorage ? userStorage : {},
  address: userAddressStorage ? userAddressStorage : {}
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

    case "SUCCESS_LOGIN":
      let userStorage = JSON.parse(localStorage.getItem('YummiPizza@user'));
      let userAddressStorage = JSON.parse(localStorage.getItem('YummiPizza@userAddress'));

      return {
        ...state,
        user: userStorage,
        address: userAddressStorage
      }

    case "LOGOUT":
      localStorage.removeItem('YummiPizza@user');
      localStorage.removeItem('YummiPizza@userAddress');
      localStorage.removeItem('YummiPizza@jwt');

      return {
        user: {},
        address: {},
        choosenCurrency: state.choosenCurrency
      };

    case "CHANGE_CURRENCY":
      localStorage.setItem('YummiPizza@choosenCurrency', action.currency);

      return {
        ...state,
        choosenCurrency: action.currency
      }

    default:
      return state;
  }
}
