import { Image } from 'expo-image';
import { StatusBar, View } from "react-native";
import ActionButton from "../components/ActionButton";
import { TextMedium, TextRegular, TextSemibold } from "../components/Text";

export default function OnBoarding() {
  return (
    <View className={`flex-1 pt-[${StatusBar.currentHeight}]`}>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' />
      <View className="flex-1 p-4 items-center">
        <View className="flex-1 px-4">
          <Image source={require('../../assets/img/characters/bugcatcher-professor.png')} className="w-screen h-2/3 flex-1" contentFit="contain" contentPosition={"center"} />
          <View className="px-4 gap-4">
            <TextMedium className="text-center text-[26px]">Todos os Pokémons em um só lugar</TextMedium>
            <TextRegular className="text-center text-sm">Acesse uma vasta lista de Pokémon de
              todas as gerações já feitas pela Nintendo</TextRegular>
          </View>
        </View>
        <ActionButton>
          <TextSemibold className="text-white text-center text-lg">Continuar</TextSemibold>
        </ActionButton>
      </View>
    </View>
  )
}
