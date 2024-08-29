import { StyleSheet, Text, View } from 'react-native';
import PrimerComponente from './componentes/PrimerComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TercerComponente from './componentes/TercerComponente'
import CuartoComponente from './componentes/CuartoComponente'
import TestComponente from './componentes/TestComponente';
import HorizontalScrollView from './componentes/ScrollVIew';
import ScrollV from './componentes/Scroll';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Comenzamos a desarrollar para plataformas móviles</Text>
      <Text> Este es otro texto </Text>
      <Text> Atajo RNFES</Text>   */}
      <Text>Esto es un texto</Text>
      <ScrollV></ScrollV>
      <PrimerComponente></PrimerComponente>      
      <CuartoComponente Nombre = 'Jose' Edad='0'> </CuartoComponente>
      <CuartoComponente Nombre='ESTAMOS HACIENDO LO POSIBLE'></CuartoComponente>
      <CuartoComponente Nombre = '7MO PROG' Apellido='Rodriguez'></CuartoComponente>
      <HorizontalScrollView></HorizontalScrollView>
      <StatusBar style="auto" />
 
    </View>
  
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
