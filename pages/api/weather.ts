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

export const fetchWeather = async (lat: number | null, lon: number  | null): Promise<WeatherResponse> => {
    try {
        console.log(lat, lon);
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7`;
        const response = await axios.get(url);
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching weather data: ${error.message}`);
    }
};
