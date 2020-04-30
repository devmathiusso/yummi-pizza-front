export function setUserContact(contactData) {
  return {
    type: "SET_USER_CONTACT",
    contactData 
  }
}

export function setUserAddress(addressData) {
  return {
    type: "SET_USER_ADDRESS",
    addressData 
  }
}

export function successLogin() {
  return {
    type: "SUCCESS_LOGIN"
  }
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}

export function changeCurrency(currency) {
  return {
    type: "CHANGE_CURRENCY",
    currency
  }
}