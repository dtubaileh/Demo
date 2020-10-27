import React from 'react';
// import remove from 'lodash.remove';
const initializeState = [{
    name: 'Harri Potter',
    price: '10$',
    id: 8736,
  },
  {
    name: 'Trolls',
    price: '40$',
    id: 9503,
  },
  {
    name: 'Frozen',
    price: '100$',
    id: 2677,
  },];

export const newReducer  = (state = initializeState,action)=>{
    return state;

};