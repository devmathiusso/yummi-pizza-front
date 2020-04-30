import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { confirmOrder } from '../../actions/cart';
import { Pane, Button, Text } from 'evergreen-ui';

const Footer = ({ totalCart, deliveryCost, requiredData, confirmOrder }) => {
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const missingFields = requiredData.filter(field => field === undefined)
    
    if (!missingFields.length) {
      setDisabledButton(false);
    }
  }, [requiredData]);

  return (
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
          disabled={disabledButton}
          onClick={() => confirmOrder()}
        >
          <Text color={disabledButton ? "muted" : "white"}>Confirm Order</Text>
          <Text color={disabledButton ? "muted" : "white"} size={500}>{`$${(totalCart + deliveryCost).toFixed(2)}`}</Text>
        </Button>
      </Pane>
    </Pane>
  );
}

const mapStateToProps = state => ({
  totalCart: state.cart.totalCart,
  deliveryCost: state.cart.deliveryCost,
  requiredData: [
    state.user.user.fullName,
    state.user.user.email,
    state.user.user.phoneNumber,
    state.user.address.street,
    state.user.address.city,
    state.user.address.state,
    state.user.address.zipCode
  ]
});

const mapDispatchToProps = dispatch => ({
  confirmOrder: () => dispatch(confirmOrder())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);