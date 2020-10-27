
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './newStore';
import NewViewComponent from './newComponent/NewViewComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {MyReduxApp} from '../MyReduxApp'
//

const Stack = createStackNavigator();
export const NewReduxApp = (props) => {
    return(
        
            <NewViewComponent/>
   
    );
}


