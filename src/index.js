import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { registerLicense } from '@syncfusion/ej2-base';

//Register Syncfusion license
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCd0x1RXxbf1xzZFdMYFtbRH9PMyBoS35RdUVqW3xecnRSRmlZU0Fx');

ReactDOM.render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
