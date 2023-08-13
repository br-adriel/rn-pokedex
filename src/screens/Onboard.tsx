import { ImageSource } from "expo-image";
import { useRef, useState } from "react";
import { Animated, FlatList, SafeAreaView, StatusBar, View } from "react-native";
import ActionButton from "../components/ActionButton";
import OnboardItem from "../components/OnboardItem";
import Paginator from "../components/Paginator";
import { TextSemibold } from "../components/Text";

type onBoardScreen = {
  buttonText: string,
  id: string,
  image: ImageSource,
  title: string,
  description?: string
}

const slidesData: onBoardScreen[] = [
  {
    buttonText: "Continuar",
    id: '1',
    image: require('../../assets/img/characters/bugcatcher-professor.png'),
    title: 'Todos os Pokémons em um só lugar',
    description: "Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela Nintendo"
  },
  {
    buttonText: "Vamos começar!",
    id: '2',
    image: require('../../assets/img/characters/girl-trainer.png'),
    title: 'Mantenha sua Pokédex atualizada',
    description: "Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo sem conexão com a internet."
  }
]

export default function Onboard() {
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef<FlatList>(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const onButtonPress = () => {
    if (currentIndex < slidesData.length - 1) {
      slidesRef.current?.scrollToIndex({
        index: currentIndex + 1
      })
    }
  }

  return (
    <>
      <StatusBar backgroundColor='transparent' translucent barStyle='dark-content' />
      <SafeAreaView className={`flex-1 pt[${StatusBar.currentHeight || 0}]`}>
        <View style={{ flex: 3 }}>
          <FlatList
            data={slidesData}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({ item }) => <OnboardItem {...item} />}
            bounces={false}
            keyExtractor={(item) => item.id}
            horizontal
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            ], { useNativeDriver: false })}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            ref={slidesRef}
          />
        </View>

        <View>
          <Paginator data={slidesData} scrollX={scrollX} />
        </View>

        <View className="w-screen px-4">
          <ActionButton
            className='mb-4 mt-6'
            onPress={onButtonPress}>
            <TextSemibold className="text-white text-center text-lg">{slidesData[currentIndex].buttonText}</TextSemibold>
          </ActionButton>
        </View>
      </SafeAreaView>
    </>
  )
}
