import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import WeatherWidget from '../components/WeatherWidget';
import { useEffect } from 'react';
import WeatherSearch from '../components/WeatherSearch';
import { useWeather } from '../context/WeatherContext';

const Home: NextPage = () => {
    const { setLatitude, setLongitude } = useWeather();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);


    return (
        <div className={styles.container}>
            <WeatherSearch/>
            <WeatherWidget/>
        </div>
    );
};

export default Home
