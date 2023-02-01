import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

