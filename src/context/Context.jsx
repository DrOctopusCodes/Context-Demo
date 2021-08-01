/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
import User from '../models/User';
import { Reducer } from './Reducer';

const initState = {
  user: new User('Damon', '23', 'Algeria'),
};

export const Context = createContext(initState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initState);
  console.log(state);
  return (
    <Context.Provider value={{
      state, dispatch,
    }}
    >
      {children}
    </Context.Provider>
  );
};
