import { StyleSheet, Text, View } from 'react-native';
import SegundoComponente from './SegundoComponente';

export default function PrimerComponente() {
    return(
      <>
        <View style={styles.container}>
        <Text>React Native 2024</Text>    
        
        </View>
        <View style={styles.otroContainer}>
          <Text>Otro texto</Text>
        </View>
        <View>

        </View>
      </>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    otroContainer:{
      flex:1,
      backgroundColor:'blue'
    },
    unContenedorMas : {
      flex: 1,
      backgroundColor: 'green'
    }
  });
