/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Styling() {
  return (
    <View>
        <View style={{backgroundColor:'red',padding:10}}>
            <Text style={{color:'black'}}>Hello</Text>
        </View>
        <View style={[styles.combained,{borderWidth:5, borderColor:'black'}]} >
            <Text>Hello</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    combained:{
        backgroundColor:"#fff"
    }
})

export default Styling