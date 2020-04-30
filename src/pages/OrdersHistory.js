import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Pane, toaster } from 'evergreen-ui';

import orderService from '../services/order';
import LoadingSpinner from '../components/LoadingSpinner';
import OrderListItem from '../components/OrderListItem';

const OrdersHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderService.currentUserOrders().then(response => setOrders(response.data.orders));
  }, []);

  if (!userId) {
    toaster.warning('You need to sign in to enter this page');
    return <Redirect to="/" />;
  }

  const renderOrderList = () => {
    return orders.map(order => (
      <>
        <OrderListItem
          key={`order-list-item-${order.id}`}
          order={order}
        />
      </>
    ))
  }

  if (!orders.length) {
    return <LoadingSpinner />
  }

  return (
    <>
      <Pane 
        display="flex" 
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        flex={1}
      >
        {renderOrderList()}
      </Pane>
    </>
  )
}

const mapStateToProps = (state) => ({
  userId: state.user.user.id
});

export default connect(mapStateToProps)(OrdersHistory);