import { styled } from '@mui/system';
import { globalColors, sizes } from './GlobalStyles';
import { CardContent } from '@mui/material';

export const RootContainer = styled('div')({
    width: sizes.rootContainer.width,
    height: sizes.rootContainer.height,
    backgroundColor: globalColors.primary,
    color: globalColors.textPrimary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: sizes.rootContainer.padding,
    borderRadius: sizes.rootContainer.borderRadius,
    boxShadow: globalColors.shadow,
    transition: 'width 0.3s, height 0.3s, flex-direction 0.3s',

    '@media (min-width: 600px)': {
        justifyContent: 'space-between',
        width: sizes.rootContainer.widthMedium,
        height: sizes.rootContainer.heightMedium
    },

    '@media (min-width: 960px)': {
        flexDirection: 'column',
        width: sizes.rootContainer.widthLarge,
        height: sizes.rootContainer.heightLarge
    }
});

export const WeatherCard = styled('div')(({ backgroundColor }) => ({
    width: sizes.weatherCard.width,
    height: sizes.weatherCard.height,
    backgroundColor: backgroundColor,
    borderRadius: sizes.weatherCard.borderRadius,
    color: globalColors.textPrimary,
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'width 0.3s, height 0.3s',

    '@media (min-width: 960px)': {
        width: sizes.weatherCard.widthLarge
    }
}));

export const WeatherCards = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    transition: 'gap 0.3s, align-items 0.3s',

    '@media (min-width: 600px) and (max-width: 959px)': {
        alignItems: 'center',
        gap: sizes.gap
    }
});

export const WeatherTodayCard = styled('div')(({ backgroundColor }) => ({
    width: sizes.weatherTodayCard.width,
    height: sizes.weatherTodayCard.height,
    backgroundColor: backgroundColor,
    color: globalColors.textPrimary,
    borderRadius: sizes.weatherTodayCard.borderRadius,
    marginBottom: sizes.weatherTodayCard.marginBottom,
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    flex: 'unset',
    transition: 'width 0.3s, flex 0.3s',

    '@media (min-width: 960px)': {
        width: 'auto',
        flex: sizes.weatherTodayCard.flexLarge
    }
}));

export const WeatherTodayIcon = styled('img')({
    '@media (min-width: 960px)': {
        marginBottom: sizes.weatherTodayCard.marginBottom
    }
});

export const WeatherIcon = styled('img')({
    width: sizes.weatherIcon.width,
    height: sizes.weatherIcon.height
});

export const StyledCardContent = styled(CardContent)({
    padding: '8px'
});
