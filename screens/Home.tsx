import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { StyledText } from "../components/StyledText";
import { RootStackScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Root">) {
  const data = [{ name: "Luke Skywalker" }];

  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Star Wars</StyledText>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <StyledText>{item.name}</StyledText>}
          keyExtractor={(item) => item.name}
          horizontal
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  listContainer: {
    height: "60%",
  },
  list: {
    width: 300,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
