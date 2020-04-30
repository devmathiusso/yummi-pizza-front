import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { successLogin } from '../actions/user';
import { Redirect } from 'react-router-dom';
import { Card, Button, Alert, Text, TextInputField, Pane } from 'evergreen-ui';

import userService from '../services/user';

const SignIn = ({ successLogin }) => {
  const [redirectTo, setRedirectTo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (email && password) {
      setDisabledButton(false);
    }
  }, [email, password]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  const signIn = async (email, password) => {
    const user = await userService.signIn(email, password);

    if (user.error) {
      return setErrorMessage('User does not exists or incorrect password. Please, make your first order using this email')
    }

    successLogin();

    setRedirectTo('/');
  }

  return (
    <>
      <Pane 
        display="flex" 
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Card
          padding={20}
          marginTop={20}
          elevation={2}
          width={400}
        >
          <Alert
            intent="none"
            title="You need to make an order after your first login"
            marginBottom={10}
          >
            Your email address will be attached to your order, then you can define your password
            doing the first login
          </Alert>

          <Pane>
            <TextInputField
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              width="100%"
            />

            <TextInputField
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              width="100%"
              type="password"
            />
          </Pane>

          <Pane>
            {!!errorMessage && (
              <Alert
                intent="danger"
                title={errorMessage}
                marginBottom={24}
              />
            )}
          </Pane>

          <Pane>
            <Button
              appearance="primary"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              disabled={disabledButton}
              onClick={() => signIn(email, password)}
            >
              <Text color={disabledButton ? "muted" : "white"}>Sign In</Text>
            </Button>
          </Pane>
        </Card>
      </Pane>
    </>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  successLogin: () => dispatch(successLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);