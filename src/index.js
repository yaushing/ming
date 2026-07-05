import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PasscodeGate from './PWgate';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('body'));
root.render(
	<React.StrictMode>
    	<PasscodeGate>
     		<App />
    	</PasscodeGate>
  	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
