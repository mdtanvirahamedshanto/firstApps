import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function TextInputComponent() {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <View>
      <Text>Text Input</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder="Enter Your Name " />
    </View>
  );
}

const styles = StyleSheet.create({
input:{
  height:50,
  borderColor:'gray',
  borderWidth:1,
  paddingHorizontal:10,
  marginBottom:20,
  margin:5,
}
});

export default TextInputComponent;
