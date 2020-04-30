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