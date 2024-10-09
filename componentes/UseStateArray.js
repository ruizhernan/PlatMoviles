import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const UseStateArray = () => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState('');
  const [editando, setEditando] = useState(false);
  const [tareaActual, setTareaActual] = useState(null); 

  const manejarTarea = () => {
    if (tarea.trim() === '') return;

    if (editando) {
  
      const nuevasTareas = [...tareas];
      nuevasTareas[tareaActual] = tarea;
      setTareas(nuevasTareas);
      setEditando(false);
      setTareaActual(null);
    } else {
 
      setTareas([...tareas, tarea]);
    }

    setTarea('');
  };

 
  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };


  const editarTarea = (index) => {
    setTarea(tareas[index]);
    setEditando(true);
    setTareaActual(index);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={tarea}
        onChangeText={(text) => setTarea(text)}
      />
      <Button title={editando ? "Guardar Cambios" : "Agregar Tarea"} onPress={manejarTarea} />

      {tareas.length > 0 && (
        <View style={styles.list}>
          {tareas.map((item, index) => (
            <View key={index} style={styles.tareaContainer}>
              <Text style={styles.text}>{item}</Text>
              <View style={styles.botones}>
                <TouchableOpacity onPress={() => editarTarea(index)} style={styles.botonEditar}>
                  <Text style={styles.textoBoton}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => eliminarTarea(index)} style={styles.botonEliminar}>
                  <Text style={styles.textoBoton}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default UseStateArray;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    marginTop: 20,
  },
  tareaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: 250,
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
  botones: {
    flexDirection: 'row',
  },
  botonEditar: {
    backgroundColor: '#4CAF50',
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
  },
  botonEliminar: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});
