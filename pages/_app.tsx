import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { WeatherProvider } from '../context/WeatherContext';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light'
    }
});

function MyApp ({ Component, pageProps }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = prefersDarkMode ? darkTheme : lightTheme;

    return (
        <WeatherProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </WeatherProvider>
    );
}

export default MyApp;
