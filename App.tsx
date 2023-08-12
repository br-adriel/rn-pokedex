import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import './global.css';
import Onboard from './src/screens/Onboard';

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  });

  if (!hasLoadedFonts) return null;
  return (
    <Onboard />
  );
}

