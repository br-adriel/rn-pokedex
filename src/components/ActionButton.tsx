import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function ActionButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} className={`py-4 px-5 bg-action rounded-full w-full ${props.className}`} activeOpacity={0.9}>
      {props.children}
    </TouchableOpacity>
  )
}
