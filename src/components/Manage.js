import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ViewPager from "@react-native-community/viewpager";

import theme, { pallette, dimen, typography } from "../theme";

const Manage = () => {
  return (
    <ViewPager style={styles.container} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </ViewPager>
  );
};

export default Manage;

const styles = StyleSheet.create({
  container: { flex: 1 },

  buttonContainer: {
    ...theme.button,
    alignSelf: "center",
    backgroundColor: pallette.primary,
    marginTop: 40,
  },
  buttonText: {
    ...theme.buttonText,
    color: "white",
  },
});
