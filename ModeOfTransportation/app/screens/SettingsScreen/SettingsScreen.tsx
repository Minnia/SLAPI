import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import {axiosClient} from '../../util/api';
// @ts-ignore

const SettingsScreen: React.FC = () => {
  console.log(process.env.SUPER_USER_ID);
  const [user, setUser] = useState();
  const getUser = async (id: string) => {
    const {data} = await axios.get(
      `${axiosClient.defaults.baseURL}/user?id=${id}`,
    );
    setUser(data.firstName);
  };
  useEffect(() => {
    if (process.env.SUPER_USER_ID) {
      getUser(process.env.SUPER_USER_ID);
    }
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{user}</Text>
    </View>
  );
};

export default SettingsScreen;
