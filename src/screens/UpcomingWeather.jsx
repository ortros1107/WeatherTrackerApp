import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, ImageBackground, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

const Empty = () => (
    <View>
        <Text>No data available...</Text>
    </View>
)



const UpcomingWeather = ({data}) => {

    const renderItem = ({item}) => 
        (
            <ListItem dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main} />
        )
    
    const {wrapper, imageStyle} = styles;

  return (
    <SafeAreaView style={wrapper}>
        <ImageBackground source={require("../../assets/img/clouds-background.jpg")} style={imageStyle}>
            <FlatList 
            data={data} 
            renderItem={renderItem} 
            keyExtractor={(item) => item.dt_txt} 
            ItemSeparatorComponent={() => <View style={{backgroundColor: 'rgba(23, 212, 233, 0.3)', height:5}}/>}
            ListEmptyComponent={<Empty />}
            >

            </FlatList>
            </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'cyan',
        // marginTop: StatusBar.currentHeight || 0,
    },
    imageStyle: {
        flex: 1,
    },
});

export default UpcomingWeather