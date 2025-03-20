import { useMemo } from "react";
import { TouchableOpacityProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ColorName } from "../config/unistyles";
import { PlatformTouchable } from "./PlatformTouchable";
import { Text, TextVariant } from "./Text";

type ButtonSchema = "primary" | "secondary" | "secondaryLight" | "gold";
type ButtonSize = "s35" | "s40";

type ButtonProps = TouchableOpacityProps & {
  schema?: ButtonSchema;
  size?: ButtonSize;
  fontVariant?: TextVariant;
  children: string;
};

const variantsTextColor: Record<ButtonSchema, ColorName> = {
  primary: "black",
  secondary: "white80",
  secondaryLight: "white80",
  gold: "black",
};

export const Button = ({
  children,
  schema = "primary",
  fontVariant = "h2",
  ...props
}: ButtonProps) => {
  styles.useVariants({
    schema,
  });

  const style = useMemo(() => [styles.container, props.style], [props.style]);

  return (
    <PlatformTouchable {...props} style={style} hitSlop={16}>
      <View style={styles.innerContainer}>
        <Text
          variant={fontVariant}
          align="center"
          color={variantsTextColor[schema]}
          style={styles.title}
        >
          {children}
        </Text>
      </View>
    </PlatformTouchable>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    borderRadius: 15,
  },
  title: {
    paddingHorizontal: 16,
  },
  innerContainer: {
    overflow: "hidden",
    position: "relative",
    paddingVertical: 8,
    borderRadius: 15,
    backgroundColor: theme.white100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    variants: {
      schema: {
        primary: {
          backgroundColor: theme.white100,
        },
        secondary: {
          backgroundColor: theme.grey,
        },
        secondaryLight: {
          backgroundColor: theme.white10,
        },
        gold: {
          backgroundColor: theme.gold,
        },
      },
      size: {
        s35: {
          paddingHorizontal: 16,
          paddingVertical: 8,
        },
      },
    },
  },
}));
