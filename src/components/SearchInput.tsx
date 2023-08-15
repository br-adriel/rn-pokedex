import { Feather } from '@expo/vector-icons'
import { TextInput, TextInputProps, View } from 'react-native'

interface Props extends Omit<
  TextInputProps,
  'keyboardType' | 'inputMode' | 'className' | 'placeholderTextColor' |
  'clearButtonMode' | 'cursorColor'
> { }

export default function SearchInput(props: Props) {
  return (
    <View className='w-full px-4 py-3.5 border-2 border-[#ccc] rounded-full box-border flex-row items-center'>
      <Feather name='search' size={20} color='#666' />
      <TextInput
        {...props}
        className='ml-2 text-sm font-sans flex-grow'
        keyboardType='web-search'
        inputMode='search'
        placeholderTextColor='#999'
        clearButtonMode='while-editing'
        cursorColor='#999'
      />
    </View>
  )
}