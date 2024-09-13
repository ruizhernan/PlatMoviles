import * as LocalAuthentication from 'expo-local-authentication';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
    const navigation = useNavigation();
  const authenticate = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate',
        fallbackLabel: 'Use Passcode',
      });

      if (result.success) {
        navigation.navigate('Home');
        console.log('Authenticated successfully');
      } else {
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  return (
    <View>
      <Button title="Autenticarse" onPress={authenticate} />
    </View>
  );
};

export default Auth;