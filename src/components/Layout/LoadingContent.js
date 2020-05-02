import React from 'react';
import { Pane } from 'evergreen-ui';

import rotatePizza from '../../rotate-pizza.svg';

const LoadingContent = () => (
  <Pane 
    display="flex" 
    alignItems="center" 
    justifyContent="center"
    position="fixed"
    zIndex="9999"
    top={0}
    left={0}
    bottom={0}
    right={0}
    background="rgba(0,0,0,.8)"
  >
    <img src={rotatePizza} alt="" width={64} height={64} className="rotate-pizza" />
  </Pane>
);

export default LoadingContent;