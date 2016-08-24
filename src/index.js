'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello</h1>;
}

const placeholder = document.createElement('div');
document.body.appendChild(placeholder);

ReactDOM.render(<App/>, placeholder);