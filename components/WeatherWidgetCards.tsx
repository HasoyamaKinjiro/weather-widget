import React from 'react';
import { sizes } from '../styles/GlobalStyles';
import { WeatherCard, WeatherCards, WeatherIcon } from '../styles/WeatherWidgetStyles';
import { CardContent, Typography } from '@mui/material';
import { WeatherResponse } from '../pages/api/weather';

interface WeatherWidgetCardsProps {
    windowWidth: number;
    weatherData: WeatherResponse;
    weatherStyle: string;
}

const WeatherWidgetCards = ({ windowWidth, weatherData, weatherStyle }: WeatherWidgetCardsProps) => {
    let forecastDays;

    if (windowWidth >= sizes.windowScale.large) {
        forecastDays = weatherData.forecast.forecastday.slice(1);
    } else if (windowWidth >= sizes.windowScale.wide) {
        forecastDays = weatherData.forecast.forecastday.slice(0, 2);
    } else {
        forecastDays = weatherData.forecast.forecastday.slice(0, 0);
    }

    return (
        <WeatherCards>
            {forecastDays.map((day, index) => (
                <WeatherCard key={index} backgroundColor={weatherStyle}>
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

export default WeatherWidgetCards;
