import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Pane, Text, Strong, RadioGroup } from 'evergreen-ui';

import api from '../../api';

const BillInfo = ({ totalCart, deliveryCost }) => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('1');

  useEffect(() => {
    async function fetchPaymentMethods() {
      const response = await api.get('/payment-methods');
      const methods = await response.data.payment_methods.map(method => {
        return {
          label: method.name,
          value: method.id.toString()
        }
      });

      setPaymentMethods(methods);
    }

    fetchPaymentMethods();
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
        <Text size={400} color="muted">Sub-Total: {`$${totalCart.toFixed(2)}`}</Text>
        <Text size={400} color="muted">Delivery Cost: {`$${deliveryCost.toFixed(2)}`}</Text>
        <Strong size={500}>Total: {`$${(totalCart + deliveryCost).toFixed(2)}`}</Strong>
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
  deliveryCost: state.order.deliveryCost
});

export default connect(mapStateToProps)(BillInfo);