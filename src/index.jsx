import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { setConfig } from 'react-hot-loader';
import './styles.css';
import App from 'components/app/app';

setConfig({
  pureRender: true,
  ignoreSFC: true,
});

const root = document.getElementById('root');

if (!root) throw new Error('Unable to mount your app.');

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root,
);
