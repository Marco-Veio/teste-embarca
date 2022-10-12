import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { StyledText } from "./StyledText";
import { Text, View } from "./Themed";

import { RootStackScreenProps } from "../types";

interface Props extends Partial<RootStackScreenProps<"Root">> {
  person: IPerson;
}

export function Card({ person, navigation }: Props) {
  return (
    <TouchableOpacity
      onPress={() => navigation?.navigate("Modal")}
      style={styles.container}
    >
      <StyledText style={styles.title}>{person.name}</StyledText>
      <View>
        <Text style={styles.subtitle}>Physical Aspects:</Text>
        <Text style={styles.numberDetails}>Height: {person.height} cm</Text>
        <Text style={styles.numberDetails}>Mass: {person.mass} kg</Text>
        <Text style={styles.stringDetails}>
          Hair Color: {person.hair_color}
        </Text>
        <Text style={styles.stringDetails}>
          Skin Color: {person.skin_color}
        </Text>
        <Text style={styles.stringDetails}>Eye Color: {person.eye_color}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
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
  },
  numberDetails: {
    textAlign: "center",
  },
  stringDetails: {
    textAlign: "center",
    textTransform: "capitalize",
  },
});
