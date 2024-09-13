import * as LocalAuthentication from 'expo-local-authentication';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
    const navigation = useNavigation();
  const authenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Autenticarse',
        fallbackLabel: 'Usar pin o patrón',
      });

      if (result.success) {
        navigation.navigate('Home');
        console.log('Autenticación exitosa');
      } else {
        console.log('Autenticación fallida');
      }
    } catch (error) {
      console.error('Error durante autenticación', error);
    }
  };

  return (
    <View>
      <Button title="Autenticarse" onPress={authenticate} />
    </View>
  );
};

export default Auth;