import React from "react";
import { FlatList, ImageBackground, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { StyledText } from "../components/StyledText";
import { Card } from "../components/Card";

import usePeople from "../hooks/usePeople";

import { RootStackScreenProps } from "../types";

export default function HomeScreen({
  navigation,
  route,
}: RootStackScreenProps<"Root">) {
  const { people, nextPage, getPeople } = usePeople();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/default.jpg")}
    >
      <View
        style={styles.container}
        lightColor="rgba(255,255,255,0.8)"
        darkColor="rgba(0,0,0,0.8)"
      >
        <StyledText style={styles.title}>Star Wars</StyledText>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.listContainer}>
          <FlatList
            data={people}
            keyExtractor={(item) => item.name}
            renderItem={({ item, index }) => (
              <Card
                navigation={navigation}
                route={route}
                person={item}
                index={index}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReached={() => getPeople(nextPage)}
            onEndReachedThreshold={20}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
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
    width: "80%",
  },
});
