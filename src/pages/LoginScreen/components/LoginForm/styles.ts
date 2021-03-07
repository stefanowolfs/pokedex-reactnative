import styled from 'styled-components/native';
import { View } from 'react-native';
import { Form } from 'native-base';

export const CustomView = styled(View)`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex: 1;
  max-width: 700px;
`;
