import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.js';
import App from './App';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import LoadMockData from './utils/load-mock-data';

LoadMockData();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
