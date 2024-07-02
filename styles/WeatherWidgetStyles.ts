import { Container, Card } from '@mui/material';
import { styled } from '@mui/system';

interface SizeI {
    size: 'large' | 'medium' | 'small';
}

export const RootContainer = styled(Container)(({ size }: SizeI) => ({
    width: size === 'large' ? 500 : size === 'medium' ? 500 : 250,
    height: size === 'large' ? 500 : size === 'medium' ? 250 : 250,
    backgroundColor: '#1e2a38',
    color: '#fff',
    display: 'flex',
    flexDirection: size === 'large' ? 'column': size === 'medium' ? 'row' : 'row',
    justifyContent: size === 'large' ? 'none': size === 'medium' ? 'space-between' : 'center',
    padding: 16,
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const WeatherCard = styled(Card)(({ size }: SizeI) => ({
    width: size === 'large' ? 70 : size === 'medium' ? 100 : 100,
    height: 175,
    backgroundColor: '#273946',
    color: '#fff',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}));

export const WeatherCards = styled('div')(({ size }: SizeI) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: size === 'medium' && 'center',
    gap: size === 'medium' && 16,
}));

export const WeatherTodayCard = styled(Card)(({ size }: SizeI) => ({
    width: size === 'small' && 202,
    backgroundColor: '#273946',
    color: '#fff',
    marginBottom: size === 'large' && 16,
    padding: size === 'large' && 16,
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    flex: size === 'large' ? 1 : 'unset',
}));

export const WeatherTodayIcon = styled('img')(({ size }: SizeI) =>({
    width: size === 'large' ? 64 : 64,
    height: size === 'large' ? 64 : 64,
    marginBottom: size === 'large' ? 16 : 0,
}));

export const WeatherIcon = styled('img')({
    width: 32,
    height: 32,
});
