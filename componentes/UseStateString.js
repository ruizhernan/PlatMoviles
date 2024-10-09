import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const UseStateString = () => {
    const [nombre, setNombre] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tu nombre es: {nombre}</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
    </View>
  )
}

export default UseStateString

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        marginBottom: 20,
      },
      input: {
        borderWidth: 1,
        padding: 10,
        width: 200,
        textAlign: 'center',
      },
})