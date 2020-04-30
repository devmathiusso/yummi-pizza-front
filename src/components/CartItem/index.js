import React from 'react';
import { Pane } from 'evergreen-ui';

import QtyPane from './QtyPane';
import ItemRow from './ItemRow';

const CartItem = ({ index, item, removeQtyPanel }) => {
  const { pizza } = item;

  return (
    <Pane
      borderBottom="default"
      padding={10}
      display="flex"
      width="100%"
      flexDirection="row"
    >
      {!removeQtyPanel && (<QtyPane
        itemIndex={index}
        itemQty={item.qty}
      />)}

      <ItemRow
        pizza={pizza}
        itemQty={item.qty}
        itemPreferences={item.preferences}
      />
    </Pane>
  )
}

export default CartItem;