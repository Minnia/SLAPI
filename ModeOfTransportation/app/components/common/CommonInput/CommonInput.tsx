import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import * as S from './styled';

type OwnProps = {
  placeholder?: string;
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  style?: StyleProp<TextStyle>;
  children?: JSX.Element;
};

const CommonInput: React.FC<OwnProps> = ({
  placeholder,
  value,
  onChangeText,
  style,
  children,
}) => {
  return (
    <S.StyledInput
      placeholder={placeholder}
      style={style}
      onChangeText={onChangeText}
      value={value}>
      {children}
    </S.StyledInput>
  );
};

export default CommonInput;
