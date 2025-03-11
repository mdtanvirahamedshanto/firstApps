import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface TodoInputProps {
    onAddTodo : (text : string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');
  const handleAddTodo = () => {
      if(text.trim()){
          onAddTodo(text);
          setText('');
      }
  }
  return (
    <View style={styles.constainer}>
      <TextInput
        onChangeText={setText}
        placeholder="Add A New Todo"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.addTodo}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems:'center',
    alignContent:'center'
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
    marginRight: 10,
  },
  addTodo:{
    backgroundColor:'green',
    paddingHorizontal:15,
    paddingVertical:5,
    alignContent:'center',
    alignItems:'center',
  }
});
export default TodoInput;
