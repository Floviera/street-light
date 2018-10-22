import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrafficLight from './components/street-light/street-light.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrafficLight />, document.getElementById('root'));
registerServiceWorker();
