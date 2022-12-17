import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import Spacer from 'react-styled-spacer';

import * as S from './styled';

const SearchScreen: React.FC = () => {
  const [text, onChangeText] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <S.StyledSearchContainer>
        <TextInput
          placeholder="Sök efter tider här..."
          style={{marginLeft: 4, flex: 1}}
          onChangeText={onChangeText}
          value={text}
        />
      </S.StyledSearchContainer>
      <Spacer h={20} />
      <Button title="Sök" onPress={() => console.log('test')} />
    </View>
  );
};

export default SearchScreen;
