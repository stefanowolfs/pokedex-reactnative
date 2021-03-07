import styled from 'styled-components/native';
import { Container, View, Spinner } from 'native-base';

import { Colors } from '../../styles';

export const CustomContainer = styled(Container)`
  background-color: ${Colors.green2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomSpinner = styled(Spinner)``;
