import { StyleSheet, Text, View } from 'react-native';
import PrimerComponente from './componentes/PrimerComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TercerComponente from './componentes/TercerComponente'
import CuartoComponente from './componentes/CuartoComponente'
import TestComponente from './componentes/TestComponente';
import HorizontalScrollView from './componentes/ScrollVIew';
import ScrollV from './componentes/Scroll';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Vistas/Home';
import Btn from './componentes/Btn';
import ScreenUnoB from './Vistas/ScreenUnoB';
import ComponenteCuatro from './componentes/ComponenteCuatro';

const Stack = createStackNavigator();

export default function App() {
  return (
   <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Home" component={Home}/>
          <Stack.Screen name = "PrimerComponente" component={PrimerComponente}/>
          <Stack.Screen name = "ScreenUnoB" component={ScreenUnoB}/>
          <Stack.Screen name = "TercerComponente" component={TercerComponente}/>
          <Stack.Screen name = "ComponenteCuatro" component={ComponenteCuatro}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" /> 
      </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
