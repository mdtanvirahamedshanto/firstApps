import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function Basic() {
      const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
          <Text>Hello Word! </Text>
          <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8GRrDFMaFbFAqKJf8o3vRtSDetCfR598bg&s'}} />
          <Image style={styles.image} source={require('../../assets/image.jpg')} />
          <Text>Count is {count}</Text>
          <Button color={'green'} onPress={()=>setCount(count + 1)} title="Click me" />
        </View>
      );
    }


    const styles = StyleSheet.create({
      container:{
        backgroundColor:'gray',
        height:'100%',
      },
      image:{
        width:150,
        height:150,
        margin:10,
      },
    });

export default Basic;
