import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { theme } from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <RouterProvider router={router}></RouterProvider>
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
};

export default App;