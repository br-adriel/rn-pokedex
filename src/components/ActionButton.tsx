import clsx from "clsx";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  variant?: 'default' | 'secondary'
}

export default function ActionButton(props: Props) {
  const buttonClasses = clsx(
    'py-4 px-5 rounded-full w-full',
    props.variant === 'secondary' ? 'bg-white' : 'bg-action',
    props.className
  );

  return (
    <TouchableOpacity
      {...props}
      className={buttonClasses}
      activeOpacity={0.9}
    >
      {props.children}
    </TouchableOpacity>
  )
}
