import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import data from "./data/data";
import { LinearGradient } from "expo-linear-gradient";

export default class Mosiac extends Component {
  state = {
    data: data,
  };

  mosiac = () => {
    return this.state.data.map((singleData) => {
      return (
        <View
          key={singleData.id}
          style={{ height: 250, margin: 3, flexBasis: "48%" }}
        >
          <ImageBackground
            source={{ uri: singleData.image_link }}
            imageStyle={{ borderRadius: 20 }}
            style={{
              height: 230,
            }}
          >
            <LinearGradient
              style={{
                position: "absolute",
                flexDirection: "row",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                borderRadius: 20,
              }}
              start={{ x: 0.1, y: 0.6 }}
              end={{ x: 0.1, y: 1 }}
              colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,1)"]}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  paddingLeft: 15,
                  fontSize: 15,
                  color: "#fff",
                  alignSelf: "flex-end",
                  paddingBottom: 5,
                }}
              >
                {singleData.headline}
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      );
    });
  };
  render() {
    return <View style={styles.container}>{this.mosiac()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    overflow: "hidden",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
