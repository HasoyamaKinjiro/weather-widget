import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import { getLatLong } from '../pages/api/weather';
import { SearchButton, SearchContainer, SearchInput } from '../styles/WeatherSearchStyles.ts';

const WeatherSearch = () => {
    const [location, setLocation] = useState<string>('');
    const { setLatitude, setLongitude } = useWeather();

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const handleLocationSubmit = async () => {
        try {
            const { lat, lon } = await getLatLong(location);
            setLatitude(lat);
            setLongitude(lon);
        } catch (error) {
            console.error('Failed to get coordinates for the given location:', error);
        }
    };

    return (
        <SearchContainer>
            <SearchInput
                label="Enter Location"
                value={location}
                onChange={handleLocationChange}
                variant="outlined"
            />
            <SearchButton
                onClick={handleLocationSubmit}
                variant="contained"
                color="primary"
            >
                Get Weather
            </SearchButton>
        </SearchContainer>
    );
};

export default WeatherSearch;
