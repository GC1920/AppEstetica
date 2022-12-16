import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from '../Screens/Home';
import { Lista } from '../Screens/Lista';
import { Info } from '../Screens/Info';

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};

export function StackRoutes() {
    return(
        <Navigator>

            <Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'App Estética',
                    headerStyle: {
                        backgroundColor: '#7c8fe3'
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center'
                }}
            />

            <Screen 
                name="Lista"
                component={Lista}
                options={{
                    title: 'Categorias',
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: '#7c8fe3',
                    headerTitleAlign: 'center',
                    transitionSpec: {
                      open: config,
                      close: config,
                    },
                  }}
            />

            <Screen
                name="Info"
                component={Info}
                options={{
                    title: 'Informações',
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: '#7c8fe3',
                    headerTitleAlign: 'center',
                    transitionSpec: {
                    open: config,
                    close: config,
                    }
                }}
            />

        </Navigator>
    )
}