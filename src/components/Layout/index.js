import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
  Pane, 
  Button, 
  Heading, 
  Icon, 
  Pill, 
  Image,
  Paragraph,
  SideSheet
} from 'evergreen-ui';
import logo from '../../logo.svg';

const Layout = ({ children, cart }) => {
  const [isShownCart, setIsShownCart] = useState(false);

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
            onClick={() => setIsShownCart(true)}
          >
            <Icon icon="shopping-cart" color="neutral" size={16} />
            <Pill 
              display="inline-flex" 
              margin={8}
              color="green"
              isSolid
            >
              {cart.length}
            </Pill>
          </Button>

          <Button marginRight={16} appearance="minimal">
            Sign Up
          </Button>

          <Button appearance="primary">
            Sign In
          </Button>
        </Pane>
      </Pane>

      <Pane flex={1} display="flex" padding={16} flexDirection="column">
        {children}
      </Pane>

      <SideSheet
        isShown={isShownCart}
        onCloseComplete={() => setIsShownCart(false)}
      >
        <Paragraph margin={40}>Cart Items</Paragraph>
      </SideSheet>
    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Layout);