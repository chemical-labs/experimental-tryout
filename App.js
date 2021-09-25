import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './components/Login'
import Home from './components/Home'
import Ulangan from './components/Ulangan'
import Profile from './components/Profile'
import Register from './components/Register'
import Search from './components/Search'
import Banner from './components/Banner'
import Banner_Register from './components/Banner_Register'
import Overview_Pelajaran from './components/Overview_Pelajaran'
import Overview_Ulangan from './components/Overview_Ulangan'

export default class App extends Component{
    render(){
        let Stack = createStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Banner">
                    <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name='Banner' component={Banner} options={{ headerShown: false }} />
                    <Stack.Screen name='Banner_Register' component={Banner_Register} options={{ headerShown: false }} />
                    <Stack.Screen name='Profile' component={Profile} options={{ headerStyle: {
                        backgroundColor: '#6ECB63',
                        elevation: 0,
                    },
                        headerTintColor: 'white'
                    }} />
                    <Stack.Screen name='Overview_Pelajaran' component={Overview_Pelajaran} options={{ title: '', headerStyle: {
                        backgroundColor: '#6ECB63',
                        elevation: 0,
                    },
                        headerTintColor: 'white'
                    }} />
                    <Stack.Screen name='Overview_Ulangan' component={Overview_Ulangan} options={{ title: '', headerStyle: {
                        backgroundColor: '#6ECB63',
                        elevation: 0,
                    },
                        headerTintColor: 'white'
                    }} />
                    <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
                    <Stack.Screen name='Search' component={Search} options={{ title: '', headerStyle: {
                        backgroundColor: '#6ECB63',
                        elevation: 0,
                    },
                        headerTintColor: 'white'
                    }}/>
                    <Stack.Screen name='Ulangan' component={Ulangan} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
