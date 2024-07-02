import React, { useEffect, useState } from 'react';
import { Typography, CardContent } from '@mui/material';
import {
    RootContainer,
    WeatherCard,
    WeatherCards,
    WeatherTodayCard,
    WeatherTodayIcon,
    WeatherIcon
} from '../styles/WeatherWidgetStyles';
import { fetchWeather } from '../pages/api/weather';

interface WeatherWidgetProps {
    size: 'large' | 'medium' | 'small';
    latitude: number | null;
    longitude: number | null;
}

const WeatherWidget = ({ size, latitude, longitude }: WeatherWidgetProps) => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error}</Typography>;

    const renderWeatherCards = () => {
        const forecastDays =
            size === 'large'
                ? weatherData.forecast.forecastday.slice(1)
                : weatherData.forecast.forecastday.slice(0, size === 'medium' ? 2 : 0);

        return (
            <WeatherCards size={size}>
                {forecastDays.map((day, index) => (
                    <WeatherCard key={index} size={size}>
                        <CardContent>
                            <Typography variant="h6">
                                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </Typography>
                            <WeatherIcon
                                src={`https:${day.day.condition.icon}`}
                                alt="Weather Icon"
                            />
                            <Typography variant="body2">Max: {day.day.maxtemp_c}°C</Typography>
                            <Typography variant="body2">Min: {day.day.mintemp_c}°C</Typography>
                        </CardContent>
                    </WeatherCard>
                ))}
            </WeatherCards>
        );
    };

    return (
        <RootContainer size={size}>
            <WeatherTodayCard size={size}>
                <CardContent style={{ padding: '8px' }}>
                    <Typography variant="h6" gutterBottom>
                        {weatherData.location.region}
                    </Typography>
                    <WeatherTodayIcon
                        src={`https:${weatherData.current.condition.icon}`}
                        size={size}
                        alt="Weather Icon"
                    />
                    <Typography variant={size === 'small' ? 'h4' : 'h4'}>{weatherData.current.temp_c}°C</Typography>
                    <Typography variant="body1">Feels like: {weatherData.current.feelslike_c}°C</Typography>
                    <Typography variant="body2">{weatherData.current.condition.text}</Typography>
                </CardContent>
                {
                    size === 'large' &&
                    <CardContent style={{ padding: '8px' }}>
                        <Typography variant="body1">Max Temp: {weatherData.forecast.forecastday[0].day.maxtemp_c}°C</Typography>
                        <Typography variant="body1">Min Temp: {weatherData.forecast.forecastday[0].day.mintemp_c}°C</Typography>
                        <Typography variant="body1">Wind: {weatherData.current.wind_kph} km/h</Typography>
                    </CardContent>
                }
            </WeatherTodayCard>
            {renderWeatherCards()}
        </RootContainer>
    );
};

export default WeatherWidget;

