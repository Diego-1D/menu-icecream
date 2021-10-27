import React from 'react';
import {ThemeProvider} from 'styled-components';
import backgroundBorderBlue from '../../images/fundo-derretido-blue.png';
import backgroundBorderPink from '../../images/fundo-derretido-pink.png';
import backgroundBorderWhite from '../../images/fundo-derretido-white.png';

const theme = {
    backgroundColors:{
        backgroundBlue: '#71CDFF',
        backgroundPink: '#FF819F',
        backgroundWhite: '#FFFFFF'
    },
    colors:{
        blue: '#71CDFF',
        pink: '#FF819F',
        white: '#FFFFFF'
    },
    border:{
        backgroundBorderBlue: `url(${backgroundBorderBlue})`,
        backgroundBorderPink: `url(${backgroundBorderPink})`,
        backgroundBorderWhite: `url(${backgroundBorderWhite})`
    },
    fontSize:{
        small:'20px'
    },
    borderRadius:{
        radius: '40px'
    },
    paddingSize:{
        padding: '0.75rem 2rem'
    }
};

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;

