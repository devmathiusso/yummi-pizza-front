import React from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, changeItemQty } from '../../actions/cart';
import {
  Pane,
  Text,
  Tooltip,
  SmallPlusIcon,
  BanCircleIcon
} from 'evergreen-ui';

const QtyPane = ({ itemIndex, itemQty, removeItemFromCart, changeItemQty }) => {
  const removeItem = () => removeItemFromCart(itemIndex);

  const changeQty = (newQty) => changeItemQty(itemIndex, newQty)

  return (
    <Pane display="flex" flexDirection="row" flex={1}>
      <Pane display="flex" flexDirection="row" flex={1}>
        <Pane display="flex" flexDirection="column" flex={0.7}>
          <Pane
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            flexDirection="column"
            flex={1}
          >
            <Tooltip position="top" content="Add 1 Quantity" hideDelay={0}>
              <Pane
                borderRadius="100%"
                background="rgb(71, 184, 129)"
                width={16}
                height={16}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <SmallPlusIcon 
                  size={16} 
                  color="white" 
                  cursor="pointer" 
                  onClick={() => changeQty(itemQty + 1)}
                />
              </Pane>
            </Tooltip>
          </Pane>

          <Pane
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            flexDirection="column"
            flex={1}
            marginY={20}
          >
            <Tooltip position="bottom" content="Remove 1 Quantity" hideDelay={0}>
              <BanCircleIcon 
                size={16} 
                color="danger" 
                cursor="pointer"
                onClick={() => changeQty(itemQty - 1)}
              />
            </Tooltip>
          </Pane>

          <Pane
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            flex={1}
          >
            <Tooltip position="bottom" content="Remove Item From Cart" hideDelay={0}>
              <Text color="danger" cursor="pointer" onClick={() => removeItem()}>Remove</Text>
            </Tooltip>
          </Pane>
        </Pane>

        <Pane
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          flex={1.3}
        >
          <Text size={500}>{`${itemQty}x`}</Text>
        </Pane>
      </Pane>
    </Pane>
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: itemIndex => dispatch(removeItemFromCart(itemIndex)),
  changeItemQty: (itemIndex, newQty) => dispatch(changeItemQty(itemIndex, newQty))
})

export default connect(mapStateToProps, mapDispatchToProps)(QtyPane);