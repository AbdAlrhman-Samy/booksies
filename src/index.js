import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from "./API/AuthContext";

import {firebaseConfig} from './FirebaseConfig'
import { initializeApp } from "firebase/app";



//MUI imports
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from '@mui/material/darkScrollbar';

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      },
    },
  },

  palette:{
    mode:'dark',

    primary:{
      main: '#F0572F'
    },
    secondary:{
      main: '#F6BA1E'
    },
    text:{
      primary: '#F3F3F3'
    },
    background:{
      default: ' #0F0F0F',
    },
    
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
})

theme = responsiveFontSizes(theme);

initializeApp(firebaseConfig);


ReactDOM.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById('root')
);