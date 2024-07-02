import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import WeatherWidget from '../components/WeatherWidget';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

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
            <WeatherWidget size="small" latitude={latitude} longitude={longitude}/>
            <WeatherWidget size="medium" latitude={latitude} longitude={longitude}/>
            <WeatherWidget size="large" latitude={latitude} longitude={longitude}/>
        </div>
    )
}

export default Home
