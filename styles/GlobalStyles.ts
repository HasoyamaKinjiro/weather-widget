export const globalColors = {
    primary: '#1e2a38',
    secondary: '#273946',
    textPrimary: '#fff',
    textSecondary: '#9e9e9e',
    borderPrimary: '#39495a',
    borderHover: '#5c6e83',
    borderFocused: '#ffffff',
    shadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

export const sizes = {
    gap: 16,
    windowScale: {
        wide: 600,
        large: 960
    },
    rootContainer: {
        width: 250,
        height: 250,
        widthMedium: 500,
        heightMedium: 250,
        widthLarge: 500,
        heightLarge: 500,
        padding: 16,
        borderRadius: 8
    },
    weatherCard: {
        width: 100,
        height: 175,
        widthLarge: 70,
        borderRadius: 8
    },
    weatherTodayCard: {
        width: 202,
        height: 218,
        borderRadius: 8,
        marginBottom: 16,
        flexLarge: 1
    },
    weatherIcon: {
        width: 32,
        height: 32
    }
};

export const weatherStyles = {
    sunny: '#d39e32',
    partlyCloudy: '#b7b7b7',
    cloudy: '#95a5a6',
    foggy: '#b2b2b2',
    rainy: '#4a90e2',
    snow: '#d7d7d7',
    sleet: '#a1a1a1',
    thunderstorm: '#5e5e5e',
    blizzard: '#e0e0e0',
    icePellets: '#a0a0a0',
    default: globalColors.primary
};

export const getWeatherStyle = (condition) => {
    switch (condition.toLowerCase()) {
        case 'clear':
        case 'sunny':
            return weatherStyles.sunny;
        case 'partly cloudy':
            return weatherStyles.partlyCloudy;
        case 'cloudy':
        case 'overcast':
            return weatherStyles.cloudy;
        case 'mist':
        case 'fog':
        case 'freezing fog':
            return weatherStyles.foggy;
        case 'patchy rain possible':
        case 'patchy rain nearby':
        case 'light drizzle':
        case 'patchy light drizzle':
        case 'light rain':
        case 'patchy light rain':
        case 'moderate rain at times':
        case 'moderate rain':
        case 'heavy rain at times':
        case 'heavy rain':
        case 'light rain shower':
        case 'moderate or heavy rain shower':
        case 'torrential rain shower':
        case 'patchy light rain with thunder':
        case 'moderate or heavy rain with thunder':
            return weatherStyles.rainy;
        case 'patchy snow possible':
        case 'light snow':
        case 'patchy light snow':
        case 'patchy moderate snow':
        case 'moderate snow':
        case 'patchy heavy snow':
        case 'heavy snow':
        case 'light snow showers':
        case 'moderate or heavy snow showers':
        case 'patchy light snow with thunder':
        case 'moderate or heavy snow with thunder':
            return weatherStyles.snow;
        case 'patchy sleet possible':
        case 'light sleet':
        case 'moderate or heavy sleet':
        case 'light sleet showers':
        case 'moderate or heavy sleet showers':
            return weatherStyles.sleet;
        case 'thundery outbreaks possible':
            return weatherStyles.thunderstorm;
        case 'blowing snow':
        case 'blizzard':
            return weatherStyles.blizzard;
        case 'ice pellets':
        case 'light showers of ice pellets':
        case 'moderate or heavy showers of ice pellets':
            return weatherStyles.icePellets;
        default:
            return weatherStyles.default;
    }
};
