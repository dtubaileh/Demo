import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewComponent from './Redux/Component/ViewComponent';
import AddStateComponent from './Redux/Component/AddStateComponent';
import {Provider} from 'react-redux';
import {store,ContextSrore} from './Redux/store';
import {NewReduxApp} from './NewRedux/NewReduxApp' ;
const Stack = createStackNavigator();

export const MyReduxApp = (props)=>{

    return(
        <Provider store={store} context={ContextSrore}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ViewComponent}
          options={{ title: 'MyReduxApp', headerStyle: {
            backgroundColor: '#60DBC5',
          }}}
        />
         <Stack.Screen name="AddNote" component={AddStateComponent} />
        <Stack.Screen name="NewRedux" component={NewReduxApp} options={{  headerStyle: {
            backgroundColor: 'red',
          }}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    );
}