import React from "react";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import LoadingAnimation from "./src/components/LoadingAnimation";
import useGetWeatherData from "./src/utils/hooks/useGetWeatherData";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {

  const [isLoading, error, weatherData] = useGetWeatherData();

  return (
  <NavigationContainer>
    {
      (weatherData && weatherData.list && !isLoading) ? <Tabs data={weatherData}/> : ( error ? <ErrorItem/> : <LoadingAnimation/> )
    }
  </NavigationContainer>
  )
}

export default App