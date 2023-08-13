import { Image, ImageSource } from 'expo-image'
import { View, useWindowDimensions } from 'react-native'
import ActionButton from './ActionButton'
import { TextMedium, TextRegular, TextSemibold } from './Text'

interface Props {
  image: ImageSource,
  title: string,
  description?: string
}

export default function OnboardItem({ image, title, description }: Props) {
  const { width, height } = useWindowDimensions()

  return (
    <View className='flex-1 items-center pt-4 px-4' style={{ width }}>
      <View className="flex-1 justify-end" style={{ width }}>
        <Image source={image} style={{ width, height: 0.4 * height, }} contentFit="contain" contentPosition={"center"} />
        <View className="px-5 pt-11 pb-6">
          <TextMedium className="text-center mb-4 text-[26px]">{title}</TextMedium>
          <TextRegular className="text-center text-sm">{description}</TextRegular>
        </View>
      </View>
    </View>
  )
}