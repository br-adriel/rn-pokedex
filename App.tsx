import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import './global.css';
import OnBoarding from './src/screens/OnBoarding';

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!hasLoadedFonts) return null;
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className=''>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

