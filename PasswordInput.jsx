import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry}
        placeholder="Password"
      />
      <Icon
        name={secureTextEntry ? 'eye-off' : 'eye'}
        size={24}
        color="gray"
        onPress={toggleSecureTextEntry}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginLeft: 10,
  },
});

export default PasswordInput;
