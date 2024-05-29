import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import router from "./router";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <CssBaseline></CssBaseline>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.Fragment>
);

