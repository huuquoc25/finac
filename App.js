import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Category from './screens/Category';
import OnMap from './screens/OnMap';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="OnMap" component={OnMap} />
    </Stack.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="XXX"
                    component={HomeStack}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: () => <Image tintColor={'#000'} source={require('./assets/iconMenuList.png')} />,
                    }}
                />
                <Tab.Screen
                    name="Category"
                    component={Category}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: () => <Image tintColor={'#000'} source={require('./assets/Icon_Like.png')} />,
                    }}
                />
                <Tab.Screen
                    name="Demo"
                    component={Category}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: () => (
                            <Image
                                style={{ width: 18, height: 18 }}
                                tintColor={'#000'}
                                source={require('./assets/Icon_Chat.png')}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Test"
                    component={Category}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: () => <Image tintColor={'#000'} source={require('./assets/iconMenuUser.png')} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
