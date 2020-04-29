import React, { useState } from 'react';
import { Pane, Text, Button, AddIcon, RemoveIcon, TextInput } from 'evergreen-ui';

const Footer = ({ pizzaPrice, addPizzaToCart }) => {
  const [qty, setQty] = useState(1);

  const addQty = () => setQty(qty + 1);

  const removeQty = () => {
    if (qty > 1)
      setQty(qty - 1)
  }

  return (
    <Pane
      display="flex" 
      alignItems="center" 
      justifyContent="flex-end"
      flexDirection="row"
    >
      <Pane display="flex" alignItems="center">
        <RemoveIcon size={16} color="muted" cursor="pointer" onClick={removeQty} />
        <TextInput height={40} width={60} marginX={16} value={qty} disabled style={{ textAlign: 'center' }} />
        <AddIcon size={16} color="muted" cursor="pointer" onClick={addQty} />
      </Pane>

      <Pane 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        marginX={20} 
        width={150}
      >
        <Text size={500}>{`$${(pizzaPrice * qty).toFixed(2)}`}</Text>
      </Pane>

      <Pane display="flex" alignItems="center">
        <Button 
          height={40} 
          appearance="primary"
          onClick={() => addPizzaToCart(qty)}
        >
          Add to cart
        </Button>
      </Pane>
      
    </Pane>
  )
};

export default Footer;