import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import { StyledText } from "./StyledText";
import { Text, View } from "./Themed";

interface Props {
  person: IPerson;
  index: number;
  onPress: () => void;
}

export function Card({ person, index, onPress }: Props) {
  return (
    <TouchableOpacity testID="cardButton" onPress={onPress} style={styles.root}>
      <ImageBackground
        testID="backgroundImage"
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
  root: {
    flex: 1,
    height: "100%",
    width: 300,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  container: {
    flex: 1,
    height: "100%",
    width: 300,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    textTransform: "lowercase",
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
