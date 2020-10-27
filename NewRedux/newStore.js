import React from 'react';
import {createStore} from 'redux';
import {newReducer} from './newReducer';

export const store = createStore(newReducer);
