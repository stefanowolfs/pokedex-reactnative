import React from 'react';

import { CustomButton, CustomText } from './styles';

type TransparentButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const TransparentButton: React.FC<TransparentButtonProps> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <CustomButton disabled={disabled} transparent onPress={onPress}>
      <CustomText>{title}</CustomText>
    </CustomButton>
  );
};

export default TransparentButton;
