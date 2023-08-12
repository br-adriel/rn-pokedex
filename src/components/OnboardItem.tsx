import { Image, ImageSource } from 'expo-image'
import { View, useWindowDimensions } from 'react-native'
import ActionButton from './ActionButton'
import { TextMedium, TextRegular, TextSemibold } from './Text'

interface Props {
  buttonText: string,
  image: ImageSource,
  title: string,
  description?: string
}

export default function OnboardItem({ buttonText, image, title, description }: Props) {
  const { width, height } = useWindowDimensions()

  return (
    <View className='flex-1 items-center p-4' style={{ width }}>
      <View className="flex-1 justify-end" style={{ width }}>
        <Image source={image} style={{ width, height: 0.4 * height, }} contentFit="contain" contentPosition={"center"} />
        <View className="px-5 pt-11 pb-6">
          <TextMedium className="text-center mb-4 text-[26px]">{title}</TextMedium>
          <TextRegular className="text-center text-sm">{description}</TextRegular>
        </View>
      </View>
      <ActionButton className='mx-4 mt-6'>
        <TextSemibold className="text-white text-center text-lg">{buttonText}</TextSemibold>
      </ActionButton>
    </View>
  )
}