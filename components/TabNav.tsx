import { StyleSheet, View } from "react-native";
import { colors } from "../styles/global";
import React from "react";

interface IProps {
  focused?: boolean;
  children: React.ReactElement;
}

const TabNav = ({ focused, children }: IProps) => (
  <View style={focused && styles.wrapper}>{children}</View>
);

export default TabNav;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: colors.orange,
    borderRadius: 40,
  },
});
