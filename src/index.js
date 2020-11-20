import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display';
import {BrowserRouter} from 'react-router-dom';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<BrowserRouter><Display /></BrowserRouter>, document.getElementById('root'));