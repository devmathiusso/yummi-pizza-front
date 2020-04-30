import React from 'react';
import { connect } from 'react-redux';
import {
  Pane,
  Heading,
  Text,
  Paragraph,
  Badge
} from 'evergreen-ui';

const ItemRow = ({ pizza, itemQty, itemPreferences, choosenCurrency }) => {
  const totalPrice = (itemQty * pizza.price).toFixed(2);

  return (
    <>
      <Pane 
        display="flex" 
        flexDirection="column" 
        justifyContent="center"
        flex={3}
      >
        <Pane 
          display="flex" 
          flexDirection="row" 
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading size={500}>{pizza.name}</Heading>
          <Badge isSolid color={pizza.badgeColor}>{pizza.category.name}</Badge>
        </Pane>

        <Pane marginY={10}>
          <Paragraph color="muted" align="justify">
            {
              pizza.ingredientsName.length
              ? pizza.ingredientsName.join(", ")
              : "No ingredients specified"
            }
          </Paragraph>
        </Pane>
        
        {!!itemPreferences && (
          <Pane marginBottom={10}>
            <Paragraph>{itemPreferences}</Paragraph>
          </Pane>
        )}
      </Pane>
      
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Text size={500}>{`${choosenCurrency}${totalPrice}`}</Text>
      </Pane>
    </>
  )
}

const mapStateToProps = state => ({
  choosenCurrency: state.user.choosenCurrency
});

export default connect(mapStateToProps)(ItemRow);
