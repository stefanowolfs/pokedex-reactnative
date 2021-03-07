import styled from 'styled-components/native';
import { Item, Icon, View, Text } from 'native-base';

import { Colors } from '../../styles';

export const CustomView = styled(View)`
  display: flex;
  flex-direction: column;
`;

export const CustomItem = styled(Item)`
  margin: 0px 20px;
`;

export const CustomIcon = styled(Icon)`
  color: ${Colors.gray};
`;

export const ErrorText = styled(Text)`
  font-size: 10px;
  margin: 0px 20px;
  color: red;
`;
