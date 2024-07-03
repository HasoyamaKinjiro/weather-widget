import React, { createContext, useState, useContext, ReactNode } from 'react';

interface WeatherContextProps {
    latitude: number | null;
    longitude: number | null;
    weatherData: any;
    setLatitude: (lat: number | null) => void;
    setLongitude: (lon: number | null) => void;
    setWeatherData: any;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [weatherData, setWeatherData] = useState<any>(null);

    return (
        <WeatherContext.Provider value={{ latitude, longitude, weatherData, setLatitude, setLongitude, setWeatherData}}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};
