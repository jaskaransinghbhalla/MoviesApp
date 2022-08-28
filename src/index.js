// Importing React and React Document Object Model 
import React from 'react';
import ReactDOM from 'react-dom';

// Importing App -> First App Created by us.
import App from './App.js';

// Asking ReactDOM to render the App name "App" to 'root' element by using JS
ReactDOM.render(<App />, document.getElementById('root'))