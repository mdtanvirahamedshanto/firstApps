import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

function ScrollViewComponent() {
  return (
<View style={styles.container}>
    <Text>Scrool view components</Text>
    <ScrollView nestedScrollEnabled={true}
    showsVerticalScrollIndicator={true}
    bounces={true}
    >
        {
            [...Array(20)].map((_,index)=>(
                <View key={index}>
                    <Text>{index}</Text>
                </View>
            ))
        }
    </ScrollView>
</View>  )
}

const styles = StyleSheet.create({
    container:{
        height:200,
    }
})

export default ScrollViewComponent;