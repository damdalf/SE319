import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export default function DrawerNav(){
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerType="front"
                initialRouteName='Settings'
                drawerContentOptions={{
                    activeTintColor: '#2FCCFD',
                    itemStyle: { marginVertical: 10 },
                  }}
            >



            </Drawer.Navigator>
        </NavigationContainer>
    );
}