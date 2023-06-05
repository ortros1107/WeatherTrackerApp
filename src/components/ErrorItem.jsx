import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {

    const {container, textStyle} = styles;
  return (
   <View style={container}>
    <Text style={textStyle}>Sorry, something went wrong...</Text>
    <Feather name='frown' size={100} color={"#ffffff"}/>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    textStyle: {
        fontSize: 40,
        fontWeight: 900,
        color: "#ffffff",
        textAlign: 'center',
    },
});

export default ErrorItem