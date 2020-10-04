import React, { Component } from "react";
import { ImageBackground, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Hero extends Component {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          style={{ height: 250 }}
          source={{
            uri:
              "https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/thumb-10.jpg?alt=media&token=9c9a3f0a-fb7c-4588-b5e3-412554f0a6b4",
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
            }}
            start={{ x: 0.1, y: 0.6 }}
            end={{ x: 0.1, y: 1 }}
            colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,1)"]}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#fff",
                alignSelf: "flex-end",
                paddingLeft: 15,
                paddingBottom: 25,
              }}
            >
              Booba on fire in his New Gotham
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}
