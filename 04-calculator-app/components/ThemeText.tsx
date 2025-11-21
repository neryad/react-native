import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variants?: "h1" | "h2";
}

const ThemeText = ({ children, variants = "h1", ...rest }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variants === "h1" && globalStyles.mainResult,
        variants === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
