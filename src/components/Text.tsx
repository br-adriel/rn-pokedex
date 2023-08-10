import { Text, TextProps } from 'react-native'

export function TextRegular(props: TextProps) {
  return (
    <Text {...props} className={`font-sans ${props.className}`}>
      {props.children}
    </Text>
  )
}

export function TextMedium(props: TextProps) {
  return (
    <Text {...props} className={`font-sans500 ${props.className}`}>
      {props.children}
    </Text>
  )
}

export function TextSemibold(props: TextProps) {
  return (
    <Text {...props} className={`font-sans600 ${props.className}`}>
      {props.children}
    </Text>
  )
}
