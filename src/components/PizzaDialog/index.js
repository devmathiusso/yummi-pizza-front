import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPizzaToCart } from '../../actions/cart';
import { Dialog, Pane, Text, Heading, TextareaField } from 'evergreen-ui';

import Header from './Header';
import Footer from './Footer';

const PizzaDialog = ({ 
  selectedPizza, 
  closeDialog, 
  openSuccessDialog, 
  closePizzaDialog, 
  addPizzaToCart
}) => {
  const [preferences, setPreferences] = useState('');

  if (!selectedPizza) {
    return null;
  }

  const addPizzaToCartFn = qty => {
    addPizzaToCart(selectedPizza, qty, preferences);
    openSuccessDialog();
    closePizzaDialog();
    setPreferences('');
  }

  return (
    <Pane>
      <Dialog
        isShown={!!selectedPizza}
        title={selectedPizza.name}
        onCloseComplete={() => closeDialog(null)}
        hasFooter={false}
        preventBodyScrolling
        header={
          <Header 
            pizzaName={selectedPizza.name}
            pizzaCategory={selectedPizza.category.name}
            colorBadge={selectedPizza.badgeColor}
          />
        }
        footer={
          <Footer 
            pizzaPrice={selectedPizza.price}
            addPizzaToCart={addPizzaToCartFn}
          />
        }
      >
        <Pane width="100%" display="flex" flexDirection="column">
          <Pane
            style={{
              width: "100%",
              height: 256,
              backgroundImage: `url(${selectedPizza.picture})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <Pane marginY={10} display="flex" flexDirection="column">
            <Heading size={600}>Ingredients</Heading>
            <Text marginY={10}>
              {
                selectedPizza.ingredientsName.length
                ? selectedPizza.ingredientsName.join(", ")
                : "No ingredients specified"
              }
            </Text>
          </Pane>

          <hr/>

          <Pane marginY={10} display="flex" flexDirection="column">
            <Pane marginY={10} display="flex" justifyContent="space-between" flexDirection="row">
              <Heading size={500}>Preferences</Heading>
              <Text size={300}>List any special requests</Text>
            </Pane>

            <TextareaField
              label=""
              hint="e.g. allergies, extra spicy, etc."
              inputHeight={120}
              style={{ resize: 'none' }}
              defaultValue={preferences}
              onChange={e => setPreferences(e.target.value)}
            />
          </Pane>

        </Pane>
      </Dialog>
    </Pane>
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addPizzaToCart: (pizza, qty, preferences) => dispatch(addPizzaToCart(pizza, qty, preferences))
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaDialog);