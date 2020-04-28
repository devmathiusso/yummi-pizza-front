import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

const LoadingSpinner = () => (
  <Pane display="flex" alignItems="center" justifyContent="center">
    <Spinner />
  </Pane>
);

export default LoadingSpinner;