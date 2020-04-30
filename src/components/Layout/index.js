import React from 'react';
import { connect } from 'react-redux';
import { changeIsCartOpen } from '../../actions/cart';
import { 
  Pane, 
  Button, 
  Heading, 
  Icon, 
  Pill, 
  Image
} from 'evergreen-ui';
import logo from '../../logo.svg';

import CartSideSheet from '../CartSideSheet';

const Layout = ({ children, cart, changeIsCartOpen }) => {
  const changeCartOpen = isCartOpen => {
    changeIsCartOpen(isCartOpen);
  }

  return (
    <>
      <Pane display="flex" padding={16} background="tint2">
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600} alignItems="center" justifyContent="center" display="flex">
            <Pane width={32} marginRight={5}>
              <Image src={logo} width="100%" />
            </Pane>
            Yummi Pizza
          </Heading>
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

          <Button appearance="minimal" intent="primary">
            Sign In
          </Button>
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
    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  changeIsCartOpen: isCartOpen => dispatch(changeIsCartOpen(isCartOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);