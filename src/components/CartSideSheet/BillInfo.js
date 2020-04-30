import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setPaymentMethod } from '../../actions/cart';
import { Pane, Text, Strong, RadioGroup } from 'evergreen-ui';

import paymentMethodService from '../../services/paymentMethod';

const BillInfo = ({ totalCart, deliveryCost, paymentMethod, setPaymentMethod, choosenCurrency }) => {
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    paymentMethodService.fetchPaymentMethods().then(async response => {
      const methods = await response.data.payment_methods.map(method => {
        return {
          label: method.name,
          value: method.id.toString()
        }
      });

      setPaymentMethods(methods);
    });
  }, []);

  return (
    <>
      <Pane 
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        borderBottom="default"
        flexDirection="column"
        padding={10}
        width="100%"
      >
        <Text size={400} color="muted">Sub-Total: {`${choosenCurrency}${totalCart.toFixed(2)}`}</Text>
        <Text size={400} color="muted">Delivery Cost: {`${choosenCurrency}${deliveryCost.toFixed(2)}`}</Text>
        <Strong size={500}>Total: {`${choosenCurrency}${(totalCart + deliveryCost).toFixed(2)}`}</Strong>
      </Pane>

      <Pane 
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderBottom="default"
        flexDirection="row"
        padding={10}
        width="100%"
      >
        {paymentMethods.length && (
          <RadioGroup
            size={16}
            value={paymentMethod}
            options={paymentMethods}
            onChange={value => setPaymentMethod(value)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
            width="100%"
          />
        )}
      </Pane>
    </>
  )
}

const mapStateToProps = state => ({
  totalCart: state.cart.totalCart,
  deliveryCost: state.cart.deliveryCost,
  paymentMethod: state.cart.paymentMethod,
  choosenCurrency: state.user.choosenCurrency
});

const mapDispatchToProps = dispatch => ({
  setPaymentMethod: value => dispatch(setPaymentMethod(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(BillInfo);