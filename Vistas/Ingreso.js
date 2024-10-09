import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Registro from './Registro';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Ingreso({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveLogin = async () => {

    await AsyncStorage.setItem('userLoggedIn', 'true');

  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    try {
        //Este fetch es a mi IPV4 (la sacan con ip config y se debe modificar si cambian de wifi) :3000 (el puerto donde escucha el backend)
      const response = await fetch(`http://10.0.50.58:3000/api/usuarios?email=${email}`);
      
      if (response.ok) {
        const usuarios = await response.json();
        const usuario = usuarios.find(user => user.email === email);
        
        if (usuario) {
          Alert.alert('Éxito', `Bienvenido, ${email}`);
          saveLogin();  
        } else {
          Alert.alert('Error', 'El usuario no existe');
        }
      } else {
        Alert.alert('Error', 'No se pudo verificar el usuario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al conectar con el servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingreso de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Ingresar" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.registerText}>
          ¿No tienes una cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'blue',
  },
});
