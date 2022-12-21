import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { Footer } from '../Screens/Components/Footer';

import { StackRoutes } from './stack-route';

export function Routes() {

    return(
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'}/>
            <StackRoutes />
            <Footer />
        </NavigationContainer>
    )
}