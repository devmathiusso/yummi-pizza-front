import React from 'react';
import { Pane, Heading, Badge } from 'evergreen-ui';

const Header = ({ pizzaName, pizzaCategory, colorBadge }) => (
  <Pane
    flex={1} 
    display="flex" 
    alignItems="center" 
    justifyContent="space-between"
    flexDirection="row"
  >
    <Heading size={800}>{pizzaName}</Heading>
    <Badge isSolid color={colorBadge}>{pizzaCategory}</Badge>
  </Pane>
);

export default Header;