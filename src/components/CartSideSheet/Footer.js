import React from 'react';
import { connect } from 'react-redux';
import { Pane, Button, Text } from 'evergreen-ui';

const Footer = ({ totalCart, deliveryCost }) => (
  <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
    <Pane padding={16}>
      <Button
        height={40}
        appearance="primary"
        intent="success"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        iconBefore="tick"
      >
        <Text color="white">Confirm Order</Text>
        <Text color="white" size={500}>{`$${(totalCart + deliveryCost).toFixed(2)}`}</Text>
      </Button>
    </Pane>
  </Pane>
);

const mapStateToProps = state => ({
  totalCart: state.cart.totalCart,
  deliveryCost: state.order.deliveryCost
});

export default connect(mapStateToProps)(Footer);