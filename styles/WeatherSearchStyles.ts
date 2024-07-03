import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import { globalColors, sizes } from './GlobalStyles';

export const SearchContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalColors.primary,
    padding: sizes.rootContainer.padding,
    borderRadius: sizes.rootContainer.borderRadius,
    boxShadow: globalColors.shadow,
    color: globalColors.textPrimary,
    gap: sizes.gap,

    '@media (max-width: 599px)': {
        maxWidth: sizes.rootContainer.width,
        flexDirection: 'column'
    }
});

export const SearchInput = styled(TextField)({
    backgroundColor: globalColors.secondary,
    borderRadius: sizes.rootContainer.borderRadius,
    '& .MuiInputBase-input': {
        color: globalColors.textPrimary
    },
    '& .MuiInputLabel-root': {
        color: globalColors.textSecondary
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: globalColors.borderPrimary
        },
        '&:hover fieldset': {
            borderColor: globalColors.borderHover
        },
        '&.Mui-focused fieldset': {
            borderColor: globalColors.borderFocused
        }
    }
});

export const SearchButton = styled(Button)({
    marginLeft: sizes.rootContainer.padding / 2,
    backgroundColor: globalColors.borderPrimary,
    color: globalColors.textPrimary,
    '&:hover': {
        backgroundColor: globalColors.borderHover
    }
});
