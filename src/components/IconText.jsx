import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const {iconName, iconSize, iconColor, viewStyle, textStyle, textContent} = props;
  return (
    <View style={viewStyle}>
    <Feather name={iconName} size={iconSize} color={iconColor} />
    <Text style={textStyle}>{textContent}</Text>
  </View>
    
  )
}

export default IconText