import React from 'react';
import { connect } from 'react-redux';
import { Card, Pane, Text, Strong } from 'evergreen-ui';

import CartItem from '../CartItem';

const OrderListItem = ({ order, choosenCurrency }) => {
  const renderItems = () => {
    return order.items.map((item, index) => {
      item.pizza.ingredientsName = item.pizza.ingredients.map(({ ingredient }) => ingredient.name);
      item.pizza.picture = item.pizza.picture || 'https://i.imgur.com/qhpWIZG.png';
      item.pizza.badgeColor = item.pizza.category.name === 'Veggie' ? 'green' : 'neutral';

      return (
        <CartItem
          index={index}
          item={item}
          key={`cart-item-${index}`}
          removeQtyPanel={true}
        />
      )
    })
  }

  return (
    <Card
      padding={20}
      marginTop={20}
      elevation={2}
      width="100%"
    >
      <Pane>
        {renderItems()}
        
        <Pane 
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          borderBottom="default"
          flexDirection="column"
          padding={10}
          width="100%"
        >
          <Text size={400} color="muted">Sub-Total: {`${choosenCurrency}${order.sub_total.toFixed(2)}`}</Text>
          <Text size={400} color="muted">Delivery Cost: {`${choosenCurrency}${order.delivery_cost.toFixed(2)}`}</Text>
          <Strong size={500}>Total: {`${choosenCurrency}${order.total.toFixed(2)}`}</Strong>
        </Pane>

        <Pane 
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          borderBottom="default"
          flexDirection="column"
          padding={10}
          width="100%"
        >
          <Text size={400} color="muted">
            <Strong>Payment Method:</Strong> {`${order.payment_method.name}`}
          </Text>
        </Pane>

        <Pane 
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          borderBottom="default"
          flexDirection="column"
          padding={10}
          width="100%"
        >
          <Text size={400} color="muted">
            <Strong>Street:</Strong> {`${order.address.street}`}
          </Text>
          
          <Text size={400} color="muted">
            <Strong>Number:</Strong> {`${order.address.number || ''}`}
          </Text>
          
          <Text size={400} color="muted">
            <Strong>Complement:</Strong> {`${order.address.complement || ''}`}
          </Text>
          
          <Text size={400} color="muted">
            <Strong>City:</Strong> {`${order.address.city}`}
          </Text>
          
          <Text size={400} color="muted">
            <Strong>State:</Strong> {`${order.address.state}`}
          </Text>
          
          <Text size={400} color="muted">
            <Strong>Zip Code:</Strong> {`${order.address.zip_code}`}
          </Text>
        </Pane>
      </Pane>
    </Card>
  );
}

const mapStateToProps = state => ({
  choosenCurrency: state.user.choosenCurrency
});

export default connect(mapStateToProps)(OrderListItem);