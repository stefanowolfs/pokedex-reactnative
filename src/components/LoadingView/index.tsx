import React from 'react';
import { Spinner } from 'native-base';

import { CustomContainer } from './styles';

const LoadingView: React.FC = () => {
  return (
    <CustomContainer>
      <Spinner color="red" />
    </CustomContainer>
  );
};

export default LoadingView;
