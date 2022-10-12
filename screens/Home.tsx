import React from "react";
import { FlatList, ImageBackground, StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { StyledText } from "../components/StyledText";
import { Card } from "../components/Card";

import { RootStackScreenProps } from "../types";

export default function HomeScreen({
  navigation,
  route,
}: RootStackScreenProps<"Root">) {
  const data = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    },
  ];

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
            data={data}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <Card navigation={navigation} route={route} person={item} />
            )}
            keyExtractor={(item) => item.name}
            horizontal
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
    alignItems: "center",
  },
  list: {
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
