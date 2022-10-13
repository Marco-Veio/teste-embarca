import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Text, View } from "../components/Themed";

import { RootStackScreenProps } from "../types";

import axios from "axios";

export default function ModalScreen({ route }: RootStackScreenProps<"Modal">) {
  const [home, setHome] = useState("Unknown");
  const [films, setFilmes] = useState<string[]>([]);
  const [species, setSpecies] = useState<string[]>([]);
  const [vehicles, setVehicles] = useState<string[]>([]);
  const [starships, setStarships] = useState<string[]>([]);

  useEffect(() => {
    axios.get(route.params.person.homeworld).then((response) => {
      setHome(response.data.name);
    });
    route.params.person.films.map((film) => {
      axios.get(film).then((response) => {
        setFilmes((oldState) => [...oldState, response.data.title]);
      });
    });
    route.params.person.species.map((specie) => {
      axios.get(specie).then((response) => {
        setSpecies((oldState) => [...oldState, response.data.name]);
      });
    });
    route.params.person.vehicles.map((vehicle) => {
      axios.get(vehicle).then((response) => {
        setVehicles((oldState) => [...oldState, response.data.name]);
      });
    });
    route.params.person.starships.map((starship) => {
      axios.get(starship).then((response) => {
        setStarships((oldState) => [...oldState, response.data.name]);
      });
    });
  }, [route]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

        <Text style={styles.title}>Birth Year:</Text>
        <Text style={styles.text}>{route.params.person.birth_year}</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Gender:</Text>
        <Text style={[styles.text, styles.capitalize]}>
          {route.params.person.gender}
        </Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Home:</Text>
        <Text style={styles.text}>{home}</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Films:</Text>
        {films.map((film) => (
          <Text key={film} style={styles.text}>
            {film}
          </Text>
        ))}
        {!films.length && <Text style={styles.text}>None</Text>}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Species:</Text>
        {species.map((specie) => (
          <Text key={specie} style={styles.text}>
            {specie}
          </Text>
        ))}
        {!species.length && <Text style={styles.text}>Unkown</Text>}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Vehicles:</Text>
        {vehicles.map((vehicle) => (
          <Text key={vehicle} style={[styles.text, styles.capitalize]}>
            {vehicle}
          </Text>
        ))}
        {!vehicles.length && <Text style={styles.text}>None</Text>}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.title}>Starships:</Text>
        {starships.map((starship) => (
          <Text key={starship} style={[styles.text, styles.capitalize]}>
            {starship}
          </Text>
        ))}
        {!starships.length && <Text style={styles.text}>None</Text>}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  text: {
    fontSize: 15,
  },
  capitalize: {
    textTransform: "capitalize",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
});
