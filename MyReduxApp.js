import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AddStateContextComponent} from './Context/AddStateContextComponent';
import {Provider} from 'react-redux';
import {NewReduxApp} from './NewRedux/NewReduxApp' ;
import {ViewContextComponent} from './Context/ViewContextComponent';
import {MyContextProvider} from './Context/MyContextApp';
const Stack = createStackNavigator();

export const MyReduxApp = (props)=>{

    return(
    <MyContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ViewContextComponent}
          options={{ title: 'MyReduxApp', headerStyle: {
            backgroundColor: '#60DBC5',
          }}}
        />
         <Stack.Screen name="AddNote" component={AddStateContextComponent} />
        <Stack.Screen name="NewRedux" component={NewReduxApp} options={{  headerStyle: {
            backgroundColor: 'red',
          }}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </MyContextProvider>
   
    );
}