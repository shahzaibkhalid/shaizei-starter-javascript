import React from 'react';
import { hot } from 'react-hot-loader/root';
import Play from 'components/Play';

const App = () => (
  <>
    <input type='text' />
    <h1>This is my first component!</h1>
    <Play />
  </>
);

export default hot(App);
