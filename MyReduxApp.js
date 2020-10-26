import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewComponent from './Redux/Component/ViewComponent';
import AddStateComponent from './Redux/Component/AddStateComponent';

const Stack = createStackNavigator();

export const MyReduxApp = ()=>{

    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ViewComponent}
          options={{ title: 'MyReduxApp', headerStyle: {
            backgroundColor: '#60DBC5',
          }}}
        />
        <Stack.Screen name="Profile" component={AddStateComponent} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}