import React from 'react';
import { Dialog, Pane, Text, Heading, TextareaField } from 'evergreen-ui';

import Header from './Header';
import Footer from './Footer';

const PizzaDialog = ({ selectedPizza, closeDialog }) => {
  if (!selectedPizza) {
    return null;
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
              hint="e.g. allergies, extra spicy, etc."
              inputHeight={120}
              style={{ resize: 'none' }}
            />
          </Pane>

        </Pane>
      </Dialog>
    </Pane>
  )
}

export default PizzaDialog;