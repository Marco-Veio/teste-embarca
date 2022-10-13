import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import { StyledText } from "./StyledText";
import { Text, View } from "./Themed";

import { RootStackScreenProps } from "../types";

interface Props extends Partial<RootStackScreenProps<"Root">> {
  person: IPerson;
  index: number;
}

export function Card({ person, index, navigation }: Props) {
  return (
    <TouchableOpacity
      onPress={() => navigation?.navigate("Modal")}
      style={styles.container}
    >
      <ImageBackground
        source={{
          uri: `https://starwars-visualguide.com/assets/img/characters/${
            index + (index > 15 ? 2 : 1)
          }.jpg`,
        }}
      >
        <View
          darkColor="rgba(0,0,0,0.4)"
          lightColor="rgba(255,255,255,0.3)"
          style={styles.container}
        >
          <StyledText style={styles.title}>{person.name}</StyledText>
          <View darkColor="transparent" lightColor="transparent">
            <Text style={styles.subtitle}>Physical Aspects:</Text>
            <Text style={styles.numberDetails}>Height: {person.height} cm</Text>
            <Text style={styles.numberDetails}>Mass: {person.mass} kg</Text>
            <Text style={styles.stringDetails}>
              Hair Color: {person.hair_color}
            </Text>
            <Text style={styles.stringDetails}>
              Skin Color: {person.skin_color}
            </Text>
            <Text style={styles.stringDetails}>
              Eye Color: {person.eye_color}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    width: 300,
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: "center",
  },
  numberDetails: {
    textAlign: "center",
  },
  stringDetails: {
    textAlign: "center",
    textTransform: "capitalize",
  },
});
