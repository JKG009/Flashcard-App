import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from "./global-styles";
import { PageProvider } from "./components/context/PageContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

