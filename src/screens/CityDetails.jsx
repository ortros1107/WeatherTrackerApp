import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, ImageBackground, StatusBar } from 'react-native'
import IconText from '../components/IconText';
import moment from 'moment';

const CityDetails = ({data}) => {

  const {wrapper, imageStyle, textStyle, nameText, countryText, populationView, populationText, daytimeView, daytimeText, rowLayout, columnLayout} = styles;
  const {name, country, population, sunrise, sunset} = data;

  return (
    <SafeAreaView style={wrapper}>
        <ImageBackground source={require("../../assets/img/city-background.jpg")} style={imageStyle}>
            <Text style={[textStyle, nameText]}>{name}</Text>
            <Text style={[textStyle, countryText]}>{country}</Text>
            <IconText iconName={"user"} iconSize={50} iconColor={"#ffffff"} viewStyle={[populationView, columnLayout]} textStyle={[textStyle, populationText]} textContent={`Population: ${population}`} />
            <View style={[daytimeView, rowLayout]}>
            <IconText iconName={"sunrise"} iconSize={50} iconColor={"#ffffff"} viewStyle={[daytimeView, columnLayout]} textStyle={[textStyle, daytimeText]} textContent={moment(sunrise).format('h:mm:ss a')} />
            <IconText iconName={"sunset"}  iconSize={50} iconColor={"#ffffff"} viewStyle={[daytimeView, columnLayout]} textStyle={[textStyle, daytimeText]} textContent={moment(sunset).format('h:mm:ss a')} />
            </View>
        </ImageBackground>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    imageStyle: {
      flex: 1,
      paddingTop: 20,
    },
    textStyle: {
      justifyContent: 'center',
      alignSelf: 'center',
      fontWeight: 900,
      color: '#ffffff',
      marginBottom: 10,
    },
    nameText: {
      fontSize: 30,
    },
    countryText: {
      fontSize: 24,
    },
    populationView: {
      alignItems: 'center',
      paddingTop: 40,
    },
    populationText: {
      fontSize: 24,
      marginLeft: 10,
    },
    daytimeView: {
      alignItems: 'space-around',
      padding: 20,
      paddingBottom: 0,
    },
    daytimeText: {
      fontSize: 20,
      marginLeft: 10,
    },
    rowLayout: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    columnLayout: {
      flexDirection: "column",
      alignItems: "center",
    },
    
});

export default CityDetails