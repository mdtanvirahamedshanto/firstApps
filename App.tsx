import { ScrollView, StyleSheet, View} from 'react-native';
import TextInputComponent from './src/components/TextInput';
import Basic from './src/components/Basic';
import ScrollViewComponent from './src/components/ScrollView';
import Styling from './src/components/Styling';

function App(): React.JSX.Element {

  return (
   <View style={styles.container}>
    <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.scroll}>

    <Basic />
    <TextInputComponent />
    <ScrollViewComponent />
    <Styling />
    </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:'auto',
  },
  image:{
    width:150,
    height:150,
    margin:10,
  },
  scroll:{
    padding:20,
  }
});
export default App;
