import { Skeleton } from '@mui/material';
import {
    RootContainer,
    WeatherCard,
    WeatherCards,
    WeatherTodayCard,
    StyledCardContent
} from '../styles/WeatherWidgetStyles';
import React from 'react';
import { sizes } from '../styles/GlobalStyles';

const SkeletonWeatherWidget = ({ size }) => {
    return (
        <RootContainer>
            <WeatherTodayCard>
                <StyledCardContent>
                    <Skeleton variant="text" width="150px" sx={{ fontSize: '20px' }}/>
                    <Skeleton variant="circular" width="64px" height="64px"/>
                    <Skeleton variant="text" width="150px" sx={{ fontSize: '34px' }}/>
                    <Skeleton variant="text" width="150px" sx={{ fontSize: '16px' }}/>
                    <Skeleton variant="text" width="150px" sx={{ fontSize: '14px' }}/>
                </StyledCardContent>
                {
                    size >= sizes.windowScale.large &&
                    <StyledCardContent>
                        <Skeleton variant="text" width="150px" sx={{ fontSize: '16px' }}/>
                        <Skeleton variant="text" width="150px" sx={{ fontSize: '16px' }}/>
                        <Skeleton variant="text" width="150px" sx={{ fontSize: '16px' }}/>
                    </StyledCardContent>
                }
            </WeatherTodayCard>
            <WeatherCards>
                {[...Array(size >= sizes.windowScale.large ? 6 : size >= sizes.windowScale.wide ? 2 : 0)]
                    .map((_, index) => (
                        <WeatherCard key={index}>
                            <Skeleton variant="rectangular" width="100%" height="175px" animation="wave"/>
                        </WeatherCard>
                    ))}
            </WeatherCards>
        </RootContainer>
    );
};

export default SkeletonWeatherWidget;
