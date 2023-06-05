import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Feather } from '@expo/vector-icons';
import { WeatherType } from "../utils/WeatherType";
import moment from "moment";

const ListItem = (props) => {

    const {dt_txt, min, max, condition} = props;
    const {itemStyle, tempStyle, dateStyle, dateWrapper} = styles;

    return (
        <View style={itemStyle}>
            <Feather name={WeatherType[condition]?.icon} size={50} color="white" />
            <View style={dateWrapper}>
            <Text style={dateStyle}>{moment(dt_txt).format('Do MMMM')}</Text>
            <Text style={dateStyle}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={tempStyle}>{`${Math.round(min)}°C - ${Math.round(max)}°C`}</Text>
        </View>
    )};

    const styles = StyleSheet.create({
        itemStyle: {
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 5,
            backgroundColor: 'limegreen',
            borderRadius: 25,
        },
        tempStyle: {
            color: 'white',
            fontSize: 22,
        },
        dateStyle: {
            color: 'white',
            fontSize: 18,
        },
        dateWrapper: {
            flexDirection: "column",
        },
    });
    

    export default ListItem;