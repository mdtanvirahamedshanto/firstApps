
import { StyleSheet, View} from 'react-native';
import Basic from './src/components/Basic';

function App(): React.JSX.Element {

  return (
   <View style={styles.container}>
    <Basic />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
  },
  image:{
    width:150,
    height:150,
    margin:10,
  },
});
export default App;
