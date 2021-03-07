import React from 'react';

import { Colors } from '../../styles';
import { CustomContainer, CustomView, CustomSpinner } from './styles';

const LoadingScreen: React.FC = () => {
  return (
    <CustomContainer>
      <CustomView>
        <CustomSpinner color={Colors.brown} />
      </CustomView>
    </CustomContainer>
  );
};

export default LoadingScreen;
