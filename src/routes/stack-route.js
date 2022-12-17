import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

//Core Screens
import { Home } from '../Screens/Home';
import { Lista } from '../Screens/Lista';
import { Info } from '../Screens/Info';
//Basic Screens
import { Definition } from "../Screens/basics/Definition";
import { Presentation } from "../Screens/basics/Presentation";
import { Prevent } from "../Screens/basics/Prevent";
import { Tretment } from "../Screens/basics/Tretment";

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

            <Screen 
                name="Definition"
                component={Definition}
                options={{
                    title: 'Definição',
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

            <Screen 
                name="Presentation"
                component={Presentation}
                options={{
                    title: 'Como se Apresenta',
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

            <Screen 
                name="Prevent"
                component={Prevent}
                options={{
                    title: 'Prevenção',
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

            <Screen 
                name="Tretment"
                component={Tretment}
                options={{
                    title: 'Tratamentos',
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