import React, { Component, version } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import data from "./data/data";

export default class LatestMember extends Component {
  state = {
    data: data,
  };

  latestMembers = () => {
    return this.state.data.map((singleData) => {
      return (
        <View key={singleData.id}>
          <Image
            source={{ uri: singleData.user_avatar }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              marginHorizontal: 20,
            }}
          />
          <Text style={{ textAlign: "center", padding: 5 }}>
            {singleData.username}
          </Text>
        </View>
      );
    });
  };
  render() {
    return (
      <View>
        <View>
          <Text style={{ fontSize: 22, paddingTop: 10, fontWeight: "bold" }}>
            Latest Members
          </Text>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.latestMembers()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a4b0be",
    marginVertical: 8,
    borderBottomColor: 8,
    paddingVertical: 5,
    borderRadius: 8,
    paddingVertical: 8,
  },
});
