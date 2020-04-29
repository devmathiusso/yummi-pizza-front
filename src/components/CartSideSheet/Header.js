import React from 'react';
import { Pane, Heading, Paragraph, Strong } from 'evergreen-ui';

const Header = () => (
  <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
    <Pane padding={16}>
      <Heading size={600}>Your order at <Strong size={600}>Yummi Pizza</Strong></Heading>
      <Paragraph size={400}>
        Here you can double-check your order and checkout information, and add or remove items
      </Paragraph>
    </Pane>
  </Pane>
);

export default Header;