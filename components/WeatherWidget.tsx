import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import {
    RootContainer,
    WeatherTodayCard,
    WeatherTodayIcon,
    StyledCardContent
} from '../styles/WeatherWidgetStyles';
import { fetchWeather } from '../pages/api/weather';
import { useWeather } from '../context/WeatherContext';
import SkeletonWeatherWidget from './SkeletonWeatherWidget';
import { getWeatherStyle, sizes } from '../styles/GlobalStyles';
import WeatherWidgetCards from './WeatherWidgetCards';

const WeatherWidget = () => {
    const { latitude, longitude, weatherData, setWeatherData } = useWeather();
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [weatherStyle, setWeatherStyle] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (latitude !== null && longitude !== null) {
                setLoading(true);
                try {
                    const data = await fetchWeather(latitude, longitude);
                    setWeatherData(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [latitude, longitude]);

    useEffect(() => {
        if (weatherData && weatherData.current) {
            const weatherCondition = weatherData.current.condition.text;
            setWeatherStyle(getWeatherStyle(weatherCondition));
        }
    }, [weatherData])

    if (loading) return <SkeletonWeatherWidget size={windowWidth}/>;
    if (error) return <Typography>Error: {error}</Typography>;

    return (
        <RootContainer>
            {weatherData && weatherData.location && (
                <>
                    <WeatherTodayCard backgroundColor={weatherStyle}>
                        <StyledCardContent>
                            <Typography variant="h6" gutterBottom>
                                {weatherData.location.name}
                            </Typography>
                            {weatherData.current && (
                                <>
                                    <WeatherTodayIcon
                                        src={`https:${weatherData.current.condition.icon}`}
                                        alt="Weather Icon"
                                    />
                                    <Typography variant="h4">{weatherData.current.temp_c}°C</Typography>
                                    <Typography variant="body1">Feels like: {weatherData.current.feelslike_c}°C</Typography>
                                    <Typography variant="body2">{weatherData.current.condition.text}</Typography>
                                </>
                            )}
                        </StyledCardContent>
                        {windowWidth >= sizes.windowScale.large && weatherData.current && (
                            <StyledCardContent>
                                <Typography variant="body1">Max Temp: {weatherData.forecast.forecastday[0].day.maxtemp_c}°C</Typography>
                                <Typography variant="body1">Min Temp: {weatherData.forecast.forecastday[0].day.mintemp_c}°C</Typography>
                                <Typography variant="body1">Wind: {weatherData.current.wind_kph} km/h</Typography>
                            </StyledCardContent>
                        )}
                    </WeatherTodayCard>
                    <WeatherWidgetCards weatherData={weatherData} weatherStyle={weatherStyle} windowWidth={windowWidth} />
                </>
            )}

        </RootContainer>
    );
};

export default WeatherWidget;
