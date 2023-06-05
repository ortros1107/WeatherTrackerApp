import React from 'react'
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from "../screens/UpcomingWeather";
import CityDetails from "../screens/CityDetails";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({data}) => {

  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: '#000000',
      tabBarStyle: {
        backgroundColor: 'rgb(243,246,143)',
      },
      headerStyle: {
        backgroundColor: 'rgb(243,246,143)',
      },
      headerTitleStyle: {
        left: 130,
        fontSize: 30,
        fontWeight: 900,
        color: 'rgb(100,100,100)',
      },
    }}>
        <Tab.Screen 
        options={
          {
            tabBarIcon: ({ focused }) => 
            <MaterialCommunityIcons 
              name="home" 
              size={30} 
              color={focused ? 'green' : '#000000'} 
            />
          }
        } 
        name="Home" 
        
        // component={CurrentWeather} 
        >
          {() => <CurrentWeather data={data.list[0]}/>}
        </Tab.Screen>
        <Tab.Screen 
        options={
          {
            tabBarIcon: ({ focused }) =>
              <MaterialCommunityIcons 
                name="calendar-question" 
                size={30} 
                color={focused ? 'green' : '#000000'} 
              />
          }
        } 
        name="Forecast" 
        // component={UpcomingWeather}
        >
          {() => <UpcomingWeather data={data.list} />}
        </Tab.Screen>
        <Tab.Screen 
        options={
          {
            tabBarIcon: ({ focused }) => 
              <MaterialCommunityIcons 
                name="city" 
                size={30} 
                color={focused ? 'green' : '#000000'} 
              />
          }
        } 
        name="City" 
        // component={CityDetails}
        >
        {() => <CityDetails data={data.city} />}
        </Tab.Screen>
        
    </Tab.Navigator>
  )
}

export default Tabs