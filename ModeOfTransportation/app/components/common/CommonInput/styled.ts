import {Dimensions} from 'react-native';
import styled from 'styled-components';

// @ts-ignore
export const StyledInput = styled.TextInput``;

// @ts-ignore
export const StyledSearchContainer = styled.View<{}>`
  border-width: 2px;
  border-color: blue;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  height: ${Dimensions.get('screen').height / 15}px;
  width: ${Dimensions.get('screen').width - 100}px;
`;
