import React from 'react'
import { View, Text } from 'react-native';

const RowText = (props) => {
    const {wrapperStyle, topRowStyle, bottomRowStyle, topRowTextContent, bottomRowTextContent} = props;
  return (
    <View style={wrapperStyle}>
        <Text style={topRowStyle}>{topRowTextContent}</Text>
        <Text style={bottomRowStyle}>{bottomRowTextContent}</Text>  
      </View>
  )
}

export default RowText;