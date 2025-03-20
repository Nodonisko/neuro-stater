import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export const PlatformTouchable = ({
  onPress,
  ...props
}: TouchableOpacityProps) => {
  // There seems to be bug on Android with Fabric enabled that causing some buttons not to register onPress
  // This is a workaround to ensure that the onPress event is registered
  // Related to this issue probably https://github.com/facebook/react-native/issues/44643
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback onPressOut={onPress} useForeground {...props}>
      {props.children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};
