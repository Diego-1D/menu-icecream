import React from 'react';
import {ThemeProvider} from 'styled-components';
import backgroundBorderBlue from '../../images/fundo-derretido-blue.png';
import backgroundBorderPink from '../../images/fundo-derretido-pink.png';
import backgroundBorderWhite from '../../images/fundo-derretido-white.png';

const theme = {
    colors:{
        backgroundBlue: '#71CDFF',
        backgroundPink: '#FF819F',
        backgroundWhite: '#FFFFFF'
    },
    border:{
        backgroundBorderBlue: `url(${backgroundBorderBlue})`,
        backgroundBorderPink: `url(${backgroundBorderPink})`,
        backgroundBorderWhite: `url(${backgroundBorderWhite})`
    }
};

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;

