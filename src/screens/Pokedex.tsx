import { useState } from 'react'
import { StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput'

export default function Pokedex() {
  const [busca, setBusca] = useState('')

  return (
    <>
      <StatusBar backgroundColor='#ffffff' />
      <SafeAreaView className='flex-1 bg-white'>
        <View className='w-screen p-4'>
          <SearchInput
            placeholder='Procurar Pokémon...'
            value={busca}
            onChangeText={text => setBusca(text)}
            onSubmitEditing={() => { console.log(busca); setBusca('') }}
            enterKeyHint='search'
          />
        </View>
      </SafeAreaView>
    </>
  )
}