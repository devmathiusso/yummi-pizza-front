import React from 'react';
import { Pane, Card, Paragraph, SideSheet } from 'evergreen-ui';

import Header from './Header';
import Footer from './Footer';
import BillInfo from './BillInfo';
import CartItem from '../CartItem';
import AddressContactInfo from './AddressContactInfo';

const CartSideSheet = ({ cartItems, isCartOpen, changeCartOpen }) => {
  const renderCartItems = () => {
    if (!cartItems.length) {
      return (
        <Paragraph>You have no items on your cart yet...</Paragraph>
      )
    }

    return cartItems.map((item, index) => {
      return <CartItem
        item={item} 
        index={index}
        key={`cart-item-${index}`}
        removeQtyPanel={false}
      />
    })
  }

  return (
    <SideSheet
      isShown={isCartOpen}
      onCloseComplete={() => changeCartOpen(false)}
      containerProps={{
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
      }}
    >
      <Header />

      <Pane flex="1" display="flex" overflowY="scroll" background="tint1" padding={16}>
        <Card
          backgroundColor="white"
          elevation={0}
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems={cartItems.length ? "flex-start" : "center"}
          justifyContent={cartItems.length ? "flex-start" : "center"}
        >
          {renderCartItems()}

          {!!cartItems.length && <BillInfo />}
          {!!cartItems.length && <AddressContactInfo />}
        </Card>
      </Pane>

      {!!cartItems.length && <Footer />}
    </SideSheet>
  );
}

export default CartSideSheet;