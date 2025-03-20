import { Image, ImageProps } from "expo-image";
import { ColorName } from "../config/unistyles";
import { useUnistyles } from "react-native-unistyles";

const icons = {
  // close: require("@/assets/icons/close.svg"),
} as const;

export type IconName = keyof typeof icons;

type IconProps = ImageProps & {
  name: IconName;
  size?: number;
  color?: ColorName;
};

export const Icon = ({
  name,
  size = 24,
  color = "white100",
  ...props
}: IconProps) => {
  const { theme } = useUnistyles();
  const iconColor = theme[color];
  return (
    <Image
      source={icons[name]}
      style={{ width: size, height: size }}
      contentFit="contain"
      tintColor={iconColor}
      {...props}
    />
  );
};
