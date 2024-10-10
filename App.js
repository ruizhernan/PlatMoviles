import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, View, ActivityIndicator, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

import Home from './Vistas/Home';
import Auth from './Vistas/Auth';
import Registro from './Vistas/Registro';
import Ingreso from './Vistas/Ingreso';
import VerUsuarios from './Vistas/VerUsuarios';
import UseStateNumber from './componentes/UseStateNumber'
import UseStateString from './componentes/UseStateString'
import UseStateArray from './componentes/UseStateArray'
const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar si el usuario ya está autenticado
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        if (userLoggedIn) {
          // Si el usuario ya ha iniciado sesión, intenta la autenticación biométrica
          authenticateBiometric();
        } else {
          setLoading(false); // Muestra el login si no hay registro previo
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    checkAuthentication();
  }, []);

  // Función para autenticar usando huella dactilar
  const authenticateBiometric = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      Alert.alert('Dispositivo no compatible con autenticación biométrica');
      setLoading(false);
      return;
    }

    const { success } = await LocalAuthentication.authenticateAsync();
    if (success) {
      setIsAuthenticated(true);
    } else {
      Alert.alert('Falló la autenticación biométrica');
    }
    setLoading(false);
  };

  // Si está cargando, muestra un spinner de carga
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Aca revisamos si autenticó y esas serían las vistas a las que puede acceder */}
          {isAuthenticated ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name ="UseStateNumber" component={UseStateNumber}/>
              <Stack.Screen name ="UseStateString" component={UseStateString}/>
              <Stack.Screen name ="UseStateArray" component={UseStateArray}/>
              <Stack.Screen name ="VerUsuarios" component={VerUsuarios}/>
            </>
          ) :   (
            
            <>
              <Stack.Screen name="Login" component={Ingreso} />
              <Stack.Screen name="Registro" component={Registro} />

            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
