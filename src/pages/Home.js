import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeIsCartOpen, toggleOrderSuccessDialog } from '../actions/cart';
import { CornerDialog, Dialog, Pane } from 'evergreen-ui';

import api from '../api';
import LoadingSpinner from '../components/LoadingSpinner';
import PizzaCard from '../components/PizzaCard';
import PizzaDialog from '../components/PizzaDialog';

const Home = ({ 
  changeIsCartOpen, 
  isCartOpen, 
  orderSuccessDialog, 
  toggleOrderSuccessDialog
}) => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, selectPizza] = useState(null);
  const [shownSuccessDialog, setShownSuccessDialog] = useState(false);

  useEffect(() => {
    async function fetchPizzas() {
      const response = await api.get('/pizzas');
      setPizzas(response.data.pizzas);
    }

    fetchPizzas();
  }, []);

  const renderPizzaList = () => {
    return pizzas.map(pizza => {
      return (
        <PizzaCard 
          pizza={pizza} 
          key={`menu-pizza-${pizza.id}`} 
          openPizzaDialog={selectPizza}
        />
      )
    })
  }

  const openSuccessDialog = () => setShownSuccessDialog(true);

  const closeSuccessDialog = close => {
    setShownSuccessDialog(false);
    close();
  };

  const openCart = close => {
    close();
    changeIsCartOpen(true);
  }

  if (!pizzas.length) {
    return <LoadingSpinner />
  }

  return (
    <>
      <Pane display="flex" flexWrap="wrap" justifyContent="space-between">
        {renderPizzaList()}
      </Pane>

      <PizzaDialog
        selectedPizza={selectedPizza}
        closeDialog={selectPizza}
        openSuccessDialog={openSuccessDialog}
        closePizzaDialog={() => selectPizza(null)}
      />

      <CornerDialog
        isShown={shownSuccessDialog && !selectedPizza && !isCartOpen}
        title="Pizza Added To Cart"
        intent="success"
        confirmLabel="Open Cart"
        cancelLabel="Keep Buying"
        onCloseComplete={() => setShownSuccessDialog(false)}
        onConfirm={close => openCart(close)}
        onCancel={close => closeSuccessDialog(close)}
      >
        You can keep ordering or go directly to your cart
      </CornerDialog>

      <Dialog
        isShown={orderSuccessDialog}
        title="Order Sent Successfully!"
        intent="success"
        onCloseComplete={() => toggleOrderSuccessDialog()}
        confirmLabel="Yummi!"
        hasCancel={false}
      >
        We are preparing your delicious pizzas!
      </Dialog>

    </>
  )
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.isCartOpen,
  orderSuccessDialog: state.cart.orderSuccessDialog
});

const mapDispatchToProps = (dispatch) => ({
  changeIsCartOpen: isCartOpen => dispatch(changeIsCartOpen(isCartOpen)),
  toggleOrderSuccessDialog: () => dispatch(toggleOrderSuccessDialog())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);