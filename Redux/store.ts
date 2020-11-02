import React from 'react';
import {createStore,AnyAction} from 'redux';
import { ReactReduxContextValue } from 'react-redux';
import {reducer} from './reducer';

export const store = createStore(reducer);

export const ContextSrore: React.Context<ReactReduxContextValue<any, AnyAction>> = React.createContext({ store: store, storeState: store.getState() });
