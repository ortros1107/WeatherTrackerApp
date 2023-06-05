import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { WeatherType } from "../utils/WeatherType";

const CurrentWeather = ({data}) => {

  const {wrapper, container, tempStyle, notice, rangeWrapper, range, bodyWrapper, weatherType, weatherDescription} = styles;
  const {weather, main: {temp, feels_like, temp_max, temp_min}} = data;

  const weatherCond = weather[0]?.main;

  return (
    <SafeAreaView style={[wrapper, {backgroundColor: WeatherType[weatherCond]?.backgroundColor}]}>
      <View style={container}>
      <Feather name={WeatherType[weatherCond]?.icon} size={100} color={"rgb(255,255,255)"} />
        <Text style={tempStyle}>{`${temp}°C`}</Text>
        <Text style={notice}>Feels like {`${feels_like}°C`}</Text>
        <RowText
         wrapperStyle={rangeWrapper} 
         topRowStyle={range} 
         bottomRowStyle={range} 
         topRowTextContent={`Low: ${temp_min}°C`} 
         bottomRowTextContent={`High: ${temp_max}°C`}
         />
      </View>
      <RowText 
      wrapperStyle={bodyWrapper} 
      topRowStyle={weatherType} 
      bottomRowStyle={weatherDescription} 
      topRowTextContent={weatherCond} 
      bottomRowTextContent={WeatherType[weatherCond]?.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
      // marginTop: StatusBar.currentHeight || 0,
      flex: 1,
      // backgroundColor: 'rgb(225,225,225)',
    },
    container: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
    },
    tempStyle: {
      color: '#ffffff',
      fontSize: 48,
    },
    notice: {
      color: '#ffffff',
      fontSize: 30,
      marginVertical: 10,
    },
    rangeWrapper: {
      flexDirection: 'row',
    },
    range: {
      color: '#ffffff',
      fontSize: 20,
      marginHorizontal: 10,
    },
    bodyWrapper: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 40,
    },
    weatherType: {
      fontSize: 30,
      color: '#ffffff',
    },
    weatherDescription: {
      fontSize: 24,
      color: '#ffffff',
    },
  });

export default CurrentWeather