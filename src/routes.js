import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Home } from './pages/Home/index';
import { MyLinks } from './pages/MyLinks/index';



const Drower = createDrawerNavigator();

export function Routes() {
    return (
        <Drower.Navigator
            drawerContentOptions={{
                activeBackgroundColor: '#2ccbb6',
                activeTintColor: '#fff',
                marginTop: 16,
                labelStyle: {
                    fontSize: 19,

                }
            }}

        >
            <Drower.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar links',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drower.Screen
                name="MyLinks"
                component={MyLinks}
                options={{
                    title: 'Meus links',
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'stats-chart' : 'stats-chart-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Drower.Navigator>
    )
}