/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { UserDisplay } from './components/UserDisplay';
import { UserEntry } from './components/UserEntry';
import { Provider } from './context/Context';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '12px' }}>Context Demo</h1>
      <Provider>
        <UserEntry />
        <UserDisplay />
      </Provider>
    </div>
  );
}

export default App;
