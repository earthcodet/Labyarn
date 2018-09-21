import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Godrap from './godrap';
//import Image from './Image';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Godrap />, document.getElementById('root'));
registerServiceWorker();
