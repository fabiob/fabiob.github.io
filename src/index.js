'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './app';

const placeholder = document.createElement('div');
document.body.appendChild(placeholder);

ReactDOM.render(<AppContainer><App/></AppContainer>, placeholder);