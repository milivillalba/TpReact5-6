
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './views/Home';
import { PokeApi } from './views/Pokemon';


const Stack = createNativeStackNavigator();//crea un navegador de tipo pila(stack)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name='Inicio' component={Home}/>
        <Stack.Screen name='Wassap' component= {PokeApi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


