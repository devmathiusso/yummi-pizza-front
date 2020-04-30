import React from 'react';
import { connect } from 'react-redux';
import { Card, Pane, Text, Heading, Badge } from 'evergreen-ui';

const PizzaCard = ({ pizza, openPizzaDialog, choosenCurrency }) => {
  pizza.ingredientsName = pizza.ingredients.map(({ ingredient }) => ingredient.name);
  pizza.picture = pizza.picture || 'https://i.imgur.com/qhpWIZG.png';
  pizza.badgeColor = pizza.category.name === 'Veggie' ? 'green' : 'neutral';

  return (
    <Card
      display="flex" 
      flexDirection="row" 
      width={400} 
      height={170}
      marginBottom={20}
      hoverElevation={2}
      style={{ cursor: 'pointer' }}
      onClick={() => openPizzaDialog(pizza)}
      border="default"
      flex="0 0 30%"
    >
      <Pane 
        padding={16}
        flex={3}
        display="flex" 
        justifyContent="space-between" 
        flexDirection="column"
      >
        <Heading size={500}>{pizza.name}</Heading>
        <Text marginY={10}>
          {
            pizza.ingredientsName.length
            ? pizza.ingredientsName.join(", ")
            : "No ingredients specified"
          }
        </Text>
        <Text size={500} marginBottom={10}>{`${choosenCurrency}${pizza.price.toFixed(2)}`}</Text>
        <Badge isSolid color={pizza.badgeColor}>{pizza.category.name}</Badge>
      </Pane>

      <Pane
        flex={2}
        height="100%"
        style={{
          backgroundImage: `url(${pizza.picture})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Card>
  )
}

const mapStateToProps = state => ({
  choosenCurrency: state.user.choosenCurrency
});

export default connect(mapStateToProps)(PizzaCard);