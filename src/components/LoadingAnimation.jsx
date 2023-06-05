import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingAnimation = () => {
  
    const {container} = styles;

    return (
    <View style={container}>
        <ActivityIndicator size={"large"} color={"rgb(56, 243, 155)"} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
});

export default LoadingAnimation