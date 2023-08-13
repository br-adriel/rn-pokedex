import { useEffect, useRef } from 'react';
import { Animated, SafeAreaView, StatusBar } from 'react-native';

export default function Loading() {
  const rotation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <StatusBar backgroundColor='#000029' barStyle='light-content' />
      <SafeAreaView className='flex-1 items-center justify-center bg-[#000029]'>
        <Animated.Image
          source={require('../../assets/img/icons/loadingIndicator.png')}
          style={{ transform: [{ rotate: interpolatedRotation }], width: 48, height: 48 }}
        />
      </SafeAreaView>
    </>
  )
}