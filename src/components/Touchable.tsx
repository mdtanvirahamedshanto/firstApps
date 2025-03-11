import { useState } from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

function TouchableComponent() {
    const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>TouchableComponent Components {count}</Text>
      <TouchableOpacity onPress={()=>setCount(count + 0.01)} style={{backgroundColor:'green',padding:10}}>
        <Text style={{color:'white' , textAlign:'center'}}>Click me</Text>
      </TouchableOpacity>
        <TouchableHighlight underlayColor={'red'} onPress={()=>setCount(count + 1)} style={{backgroundColor:'green',padding:10 , marginTop:10}}>
            <Text style={{color:'white' , textAlign:'center'}}>Click me</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback onPress={()=>setCount(count + 1)} style={{backgroundColor:'green',padding:10 , marginTop:10}} >
            <Text style={{color:'green' , textAlign:'center'}}>Click me</Text>
        </TouchableWithoutFeedback>

        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TouchableComponent;
