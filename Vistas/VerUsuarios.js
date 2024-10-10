import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const VerUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);   // Estado para almacenar la lista de usuarios
  const [loading, setLoading] = useState(true);   // Estado para manejar el indicador de carga

  // Función para obtener los usuarios desde el backend
  const obtenerUsuarios = async () => {
    try {
      const response = await fetch('http://10.0.1.33:3000/api/usuarios'); // Cambia la URL por la correcta
      const data = await response.json();     // Convierte la respuesta a JSON
      setUsuarios(data);                      // Actualiza el estado con los usuarios obtenidos
      setLoading(false);                      // Cambia el estado de carga a false
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      setLoading(false);                      // En caso de error, desactiva el indicador de carga
    }
  };

  // useEffect para ejecutar la función de obtener usuarios al montar el componente
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  // Función para renderizar cada usuario en la FlatList
  const renderUsuario = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>ID: {item.id}</Text>
      <Text style={styles.text}>Nombre: {item.nombre}</Text>
      <Text style={styles.text}>Email: {item.email}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando usuarios...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}                       // Datos que mostrará la FlatList
        keyExtractor={(item) => item.id.toString()}  // Clave única para cada ítem
        renderItem={renderUsuario}            // Función que renderiza cada ítem
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerUsuarios;
