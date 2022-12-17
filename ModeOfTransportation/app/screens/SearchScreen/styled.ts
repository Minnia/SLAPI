import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const StyledSearchContainer = styled.View<{}>`
  border-width: 2px;
  border-color: black;
  height: ${Dimensions.get('screen').height / 15}px;
  width: ${Dimensions.get('screen').width - 100}px;
`;
