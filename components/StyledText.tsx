import { Text, TextProps } from "./Themed";

export function StyledText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "starjedi",
          color: "black",
          textShadowColor: "gold",
          textShadowRadius: 2,
        },
      ]}
    />
  );
}
