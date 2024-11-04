import { Text, TextProps } from "./Themed";

export function ManropeText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "Manrope" }]} />;
}

