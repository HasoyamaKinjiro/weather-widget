import axios from 'axios';

const API_KEY = '7e152e9f2125497d94954039240207';

export interface WeatherResponse {
    current: {
        temp_c: number;
        condition: {
            text: string;
        };
    };
    forecast: {
        forecastday: {
            date: string;
            day: {
                maxtemp_c: number;
                mintemp_c: number;
                condition: {
                    text: string;
                };
            };
        }[];
    };
}

export const fetchWeather = async (lat: number | null, lon: number | null): Promise<WeatherResponse> => {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7`;
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        console.error(`Error fetching weather data: ${error.message}`);
    }
};

export const getLatLong = async (location: string): Promise<{ lat: number; lon: number }> => {
    try {
        const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${encodeURIComponent(location)}`;
        const response = await axios.get(url);
        const data = response.data;

        const { lat, lon } = data[0];
        return { lat, lon };
    } catch (error: any) {
        console.error(`Error fetching weather data: ${error.message}`);
    }
};
