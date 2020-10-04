import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import data from "./data/data";

export default class News extends Component {
  state = {
    data: data,
  };

  news = () => {
    return (
      <FlatList
        style={{ width: "100%" }}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.rowStyle}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image_link }}
                style={styles.image}
              ></Image>
            </View>
            <View style={styles.rightSideContent}>
              <Text
                style={{
                  width: 100,
                  backgroundColor: "#7bed9f",
                  textAlign: "center",
                  borderRadius: 6,
                  paddingVertical: 2,
                }}
              >
                {item.type}
              </Text>
              <Text style={styles.headline}>{item.headline} </Text>

              <View style={styles.avtarAndCaption}>
                <Image
                  style={{ height: 24, width: 24, borderRadius: 12 }}
                  source={{ uri: item.user_avatar }}
                />
                <Text style={{ paddingLeft: 10 }}>{item.username} </Text>
              </View>
            </View>
          </View>
        )}
      />
    );
  };

  render() {
    return <View style={styles.container}>{this.news()}</View>;
  }
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#a4b0be",
    padding: 5,
    margin: 5,
  },
  imageContainer: {
    height: 120,
    width: Dimensions.get("window").width / 3 - 4,
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
  container: {
    overflow: "hidden",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightSideContent: {
    width: Dimensions.get("window").width / 1.7,
    paddingLeft: 8,
  },
  headline: {
    fontSize: 17,
    fontWeight: "bold",
  },
  avtarAndCaption: {
    flexDirection: "row",
    alignSelf: "stretch",
    paddingTop: 15,
  },
});
