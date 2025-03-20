import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
} from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { ColorName } from "@/config/unistyles";

export type TextProps = DefaultTextProps & {
  variant?: TextVariant;
  color?: ColorName;
  align?: "left" | "center" | "right";
};

export const textVariants = {
  h1: {
    fontSize: 28,
  },
  h2: {
    fontSize: 18,
  },
  h3: {
    fontSize: 16,
  },
  paragraph: {
    fontSize: 14,
  },
} as const;

export type TextVariant = keyof typeof textVariants;

const styles = StyleSheet.create((theme) => ({
  text: {
    variants: {
      variant: {
        h1: {
          ...textVariants.h1,
        },
        h2: {
          ...textVariants.h2,
        },
        h3: {
          ...textVariants.h3,
        },
        paragraph: {
          ...textVariants.paragraph,
        },
      },
    },
  },
}));

export const Text = ({
  children,
  style,
  variant = "paragraph",
  color: colorName = "white100",
  align = "left",
  ...props
}: TextProps) => {
  const { theme } = useUnistyles();
  styles.useVariants({
    variant,
  });
  const color = theme[colorName as ColorName];

  return (
    <DefaultText
      style={[styles.text, { color, textAlign: align }, style]}
      {...props}
    >
      {children}
    </DefaultText>
  );
};
