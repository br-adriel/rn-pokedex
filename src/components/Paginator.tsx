import { View, Text, Animated, useWindowDimensions } from 'react-native'

interface Props {
  data: any[],
  scrollX: Animated.Value
}

export default function Paginator({ data, scrollX }: Props) {
  const { width } = useWindowDimensions()

  return (
    <View className='flex-row items-center justify-center'>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [9, 27, 9],
          extrapolate: 'clamp'
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.25, 1, 0.25],
          extrapolate: 'clamp'
        })

        return <Animated.View key={i.toString()} className='h-[9] rounded-full bg-action mx-2' style={{ width: dotWidth, opacity }}></Animated.View>
      })}
    </View>
  )
}