import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import LatestMember from "./components/LatestMember";
import Mosiac from "./components/Mosiac";
import data from "./components/data/data";
import News from "./components/News";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1, padding: 5 }}>
          <View>
            <Heading />
            <Hero />
            <LatestMember />
          </View>
          <View>
            <Text style={{ paddingTop: 10, fontWeight: "bold", fontSize: 22 }}>
              Monday
            </Text>
          </View>
          <Mosiac />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 10,
              paddingLeft: 6,
            }}
          >
            News
          </Text>
          <News />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  rowStyle: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#a4b0be",
  },
});
