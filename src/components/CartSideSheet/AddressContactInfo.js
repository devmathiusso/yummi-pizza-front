import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserContact, setUserAddress } from '../../actions/user';
import { Pane, TextInputField, Heading, Alert } from 'evergreen-ui';

const AddressContactInfo = ({ setUserContact, setUserAddress }) => {
  // Contact
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  // Address
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const onChangeContactField = (field, value, fn) => {
    fn(value);
    setUserContact(field, value);
  }

  const onChangeAddressField = (field, value, fn) => {
    fn(value);
    setUserAddress(field, value);
  }

  return (
    <>
      <Pane 
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        borderBottom="default"
        flexDirection="column"
        padding={10}
        width="100%"
      >
        <Alert
          intent="none"
          title="You don't need to log in to make an order"
          marginBottom={10}
        >
          All your orders will be attached to your email, 
          so you can log in / register later to see your order history
        </Alert>

        <Pane width="100%">
          <Heading size={500} marginBottom={10}>Contact</Heading>

          <TextInputField
            label="Full Name"
            isInvalid={!fullName}
            value={fullName}
            onChange={e => onChangeContactField('fullName', e.target.value, setFullName)}
            width="100%"
          />

          <Pane 
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="row"
            width="100%"
          >
            <TextInputField
              label="Email"
              isInvalid={!email}
              value={email}
              onChange={e => onChangeContactField('email', e.target.value, setEmail)}
              width="60%"
            />

            <TextInputField
              label="Phone Number"
              isInvalid={!phoneNumber}
              value={phoneNumber}
              onChange={e => onChangeContactField('phoneNumber', e.target.value, setPhoneNumber)}
              width="37%"
            />
          </Pane>
        </Pane>

        <Pane width="100%">
          <Heading size={500} marginBottom={10}>Address</Heading>

          <Pane 
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="row"
            width="100%"
          >
            <TextInputField
              label="Street"
              isInvalid={!street}
              value={street}
              onChange={e => onChangeAddressField('street', e.target.value, setStreet)}
              width="43%"
            />

            <TextInputField
              label="Number"
              value={number}
              onChange={e => onChangeAddressField('number', e.target.value, setNumber)}
              width="14%"
            />

            <TextInputField
              label="Complement"
              value={complement}
              onChange={e => onChangeAddressField('complement', e.target.value, setComplement)}
              width="37%"
              hint="e.g. apartment number"
            />
          </Pane>

          <Pane 
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="row"
            width="100%"
          >
            <TextInputField
              label="City"
              isInvalid={!city}
              value={city}
              onChange={e => onChangeAddressField('city', e.target.value, setCity)}
              width="32%"
            />

            <TextInputField
              label="State"
              isInvalid={!state}
              value={state}
              onChange={e => onChangeAddressField('state', e.target.value, setState)}
              width="25%"
            />

            <TextInputField
              label="Zip Code"
              isInvalid={!zipCode}
              value={zipCode}
              onChange={e => onChangeAddressField('zipCode', e.target.value, setZipCode)}
              width="37%"
            />
          </Pane>
        </Pane>
      </Pane>
    </>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setUserAddress: (field, value) => dispatch(setUserAddress({ [field]: value })),
  setUserContact: (field, value) => dispatch(setUserContact({ [field]: value })),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressContactInfo);