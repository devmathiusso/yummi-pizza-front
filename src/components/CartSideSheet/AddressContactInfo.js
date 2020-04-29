import React, { useState } from 'react';
import { Pane, TextInputField, Heading, Alert } from 'evergreen-ui';

const AddressContactInfo = () => {
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
            onChange={e => setFullName(e.target.value)}
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
              onChange={e => setEmail(e.target.value)}
              width="60%"
            />

            <TextInputField
              label="Phone Number"
              isInvalid={!phoneNumber}
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
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
              onChange={e => setStreet(e.target.value)}
              width="43%"
            />

            <TextInputField
              label="Number"
              isInvalid={!number}
              value={number}
              onChange={e => setNumber(e.target.value)}
              width="14%"
            />

            <TextInputField
              label="Complement"
              isInvalid={!complement}
              value={complement}
              onChange={e => setComplement(e.target.value)}
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
              onChange={e => setCity(e.target.value)}
              width="32%"
            />

            <TextInputField
              label="State"
              isInvalid={!state}
              value={state}
              onChange={e => setState(e.target.value)}
              width="25%"
            />

            <TextInputField
              label="Zip Code"
              isInvalid={!zipCode}
              value={zipCode}
              onChange={e => setZipCode(e.target.value)}
              width="37%"
            />
          </Pane>
        </Pane>
      </Pane>
    </>
  );
}

export default AddressContactInfo;