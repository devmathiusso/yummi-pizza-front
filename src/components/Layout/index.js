import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeIsCartOpen } from '../../actions/cart';
import { changeCurrency } from '../../actions/user';
import { 
  Pane, 
  Button, 
  Heading, 
  Icon, 
  Pill, 
  Image,
  IconButton
} from 'evergreen-ui';
import { Redirect } from 'react-router-dom';
import logo from '../../logo.svg';

import Authenticated from './Authenticated';
import LoadingContent from './LoadingContent';
import CartSideSheet from '../CartSideSheet';

const Layout = ({ 
  children, 
  cart, 
  user, 
  changeIsCartOpen, 
  choosenCurrency, 
  changeCurrency,
  isLoadingContent
}) => {
  const [redirectTo, setRedirectTo] = useState('');

  useEffect(() => {
    setRedirectTo('');
  }, [redirectTo]);

  if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }

  const changeCartOpen = isCartOpen => {
    changeIsCartOpen(isCartOpen);
  }

  return (
    <>
      <Pane display="flex" 
        padding={16} 
        background="tint2"
        justifyContent="space-between"
      >
        <Pane 
          alignItems="center"
          display="flex"
        >
          <Heading size={600} alignItems="center" justifyContent="center" display="flex">
            <Pane width={32} marginRight={5}>
              <Image src={logo} width="100%" />
            </Pane>
            Yummi Pizza
          </Heading>

          <Button marginLeft={10} appearance="minimal" intent="none" onClick={() => setRedirectTo('/')}>
            Home
          </Button>
        </Pane>

        <Pane alignItems="center" justifyContent="center" display="flex">
          <IconButton 
            appearance="minimal" 
            icon="euro"
            onClick={() => changeCurrency('€')}
            intent={choosenCurrency === "€" ? 'success' : 'none'}         
          />

          <IconButton  
            appearance="minimal" 
            icon="dollar"
            onClick={() => changeCurrency('US$')}
            intent={choosenCurrency === "US$" ? 'success' : 'none'}                  
          />
        </Pane>

        <Pane alignItems="center" justifyContent="center" display="flex">
          <Button 
            marginRight={12} 
            appearance="minimal"
            onClick={() => changeCartOpen(true)}
          >
            <Icon icon="shopping-cart" color="neutral" size={16} />
            <Pill 
              display="inline-flex" 
              margin={8}
              color="green"
              isSolid
            >
              {cart.items.length}
            </Pill>
          </Button>

          {
            user.id
            ? (<Authenticated user={user} setRedirectTo={setRedirectTo} />)
            : (<Button appearance="minimal" intent="none" onClick={() => setRedirectTo('/sign-in')}>
                Sign In
              </Button>)
          }
        </Pane>
      </Pane>

      <Pane flex={1} display="flex" padding={16} flexDirection="column">
        {children}
      </Pane>

      <CartSideSheet 
        cartItems={cart.items} 
        isCartOpen={cart.isCartOpen}
        changeCartOpen={changeCartOpen}
      />

      {isLoadingContent && <LoadingContent />}
    </>
  )
}

const mapStateToProps = (state) => ({
  isLoadingContent: state.application.isLoadingContent,
  cart: state.cart,
  user: state.user.user,
  choosenCurrency: state.user.choosenCurrency
});

const mapDispatchToProps = (dispatch) => ({
  changeIsCartOpen: isCartOpen => dispatch(changeIsCartOpen(isCartOpen)),
  changeCurrency: currency => dispatch(changeCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);