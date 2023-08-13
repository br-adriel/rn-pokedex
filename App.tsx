import 'react-native-gesture-handler';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import './global.css';
import Loading from './src/screens/Loading';
import Onboard from './src/screens/Onboard';
import Welcome from './src/screens/Welcome';
import { RootStackParamsList } from './src/types/RootStackParamsList';

const Stack = createStackNavigator<RootStackParamsList>();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [onboardViewed, setOnboardViewed] = useState(false);

  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  const checkIfOnboardWasViewed = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding')
      if (value) setOnboardViewed(true)
    } catch (error) {
      console.log('Error @checkIfOnboardWasViewed:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkIfOnboardWasViewed()
  }, [])

  if (loading || !hasLoadedFonts) return <Loading />;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={onboardViewed ? 'Welcome' : 'Onboard'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Onboard' component={Onboard} />
        <Stack.Screen name='Welcome' component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

