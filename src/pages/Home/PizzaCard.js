import React from 'react';
import { Card, Pane, Text, Heading, Badge } from 'evergreen-ui';

const PizzaCard = ({ pizza, openPizzaDialog }) => {
  pizza.ingredientsName = pizza.ingredients.map(({ ingredient }) => ingredient.name);
  pizza.picture = pizza.picture || 'https://i.imgur.com/qhpWIZG.png';
  pizza.badgeColor = pizza.category.name === 'Veggie' ? 'green' : 'neutral';

  return (
    <Card
      display="flex" 
      flexDirection="row" 
      width={400} 
      height={140}
      marginBottom={20}
      hoverElevation={1}
      style={{ cursor: 'pointer' }}
      onClick={() => openPizzaDialog(pizza)}
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
        <Text size={500} marginBottom={10}>${pizza.price.toFixed(2)}</Text>
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

export default PizzaCard;