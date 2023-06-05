import {useState, useEffect} from "react";
import * as Location from "expo-location";
import {OPENWEATHER_API_KEY} from '@env';

const useFetchData = () => {

    const [isLoading, setIsLoading] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [error, setError] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setError(true);
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude);
          setLon(location.coords.longitude);
        })();
      }, []);
      useEffect(() => {
        (async() => {
          try {
            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
            const response = await fetch(currentWeatherUrl);
            const data = await response.json();
            setWeatherData(data);
          } catch (error) {
            setError(true);
            
          } finally {
            setIsLoading(false);
          }
        })();
    
      },[lon, lat]);

    return [isLoading, error, weatherData];
}

export default useFetchData;