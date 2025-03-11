import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TodoInput from './src/TodoComponents/TodoInput';
import {useState} from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {id: Math.random().toString(), text: text, completed: false},
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          Todo App
        </Text>
        <TodoInput onAddTodo={addTodo} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default App;
