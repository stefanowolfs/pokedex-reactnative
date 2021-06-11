import styled from 'styled-components/native';

import { Colors } from '../../styles';

export const Container = styled.View`
  display: flex;
  min-height: 200px;
  min-width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${Colors.white};
`;

export const TitleText = styled.Text`
  font-family: Arial;
  font-size: 32px;
  font-weight: 800;
  color: ${Colors.purpleDark};
  margin-bottom: 20px;
`;

export const DescriptionText = styled.Text`
  font-family: Arial;
  font-size: 18px;
  color: ${Colors.purpleDark};
`;
