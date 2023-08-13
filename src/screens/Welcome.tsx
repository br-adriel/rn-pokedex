import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack'
import { SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native'
import ActionButton from '../components/ActionButton'
import OnboardItem from '../components/OnboardItem'
import { TextMedium, TextSemibold } from '../components/Text'
import { RootStackParamsList } from '../types/RootStackParamsList'

type Props = StackScreenProps<RootStackParamsList, 'Welcome'>

export default function Welcome({ navigation }: Props) {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <SafeAreaView style={{ paddingTop: (StatusBar.currentHeight || 0) }} className='flex-1'>
        <TouchableOpacity className='flex-row self-end items-center m-4' activeOpacity={0.7}>
          <TextMedium className='text-lg mr-[6]'>Pular</TextMedium>
          <MaterialCommunityIcons name='arrow-right' size={24} />
        </TouchableOpacity>
        <OnboardItem
          title='Está pronto para essa aventura?'
          description='Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!'
          image={require('../../assets/img/characters/trainers.png')}
        />
        <View className='px-4 pb-4 gap-1'>
          <ActionButton>
            <TextSemibold className='text-white text-lg text-center'>Criar conta</TextSemibold>
          </ActionButton>
          <ActionButton variant='secondary'>
            <TextSemibold className='text-action text-lg text-center'>Já tenho uma conta</TextSemibold>
          </ActionButton>
        </View>
      </SafeAreaView>
    </>
  )
}