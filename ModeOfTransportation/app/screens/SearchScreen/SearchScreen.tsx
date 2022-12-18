import React, {useState} from 'react';
import {Button, View} from 'react-native';
import Fuse from 'fuse.js';
import Spacer from 'react-styled-spacer';
import CommonInput from '../../components/common/CommonInput';

import * as S from './styled';

const SearchScreen: React.FC = () => {
  const [text, onChangeText] = useState('');

  const options = {
    isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [text],
  };

  const fuzzySearch = () => {
    const pattern = text;
    const fuse = new Fuse([text], options);
    console.log(fuse.search(pattern), 'pattern', pattern);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <S.StyledSearchContainer>
        <CommonInput
          placeholder="Sök efter tider här..."
          style={{marginLeft: 4, flex: 1}}
          value={text}
          onChangeText={onChangeText}
        />
      </S.StyledSearchContainer>
      <Spacer h={20} />
      <View>
        <Button title="Sök" onPress={fuzzySearch} />
      </View>
    </View>
  );
};

export default SearchScreen;
