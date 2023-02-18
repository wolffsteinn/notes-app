import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Note = ({ notes }) => {
  return (
    <View style={styles.noteContainer}>
      <View style={styles.left}>
        <View style={styles.square}></View>
        <Text style={styles.noteText}>{notes}</Text>
      </View>
      <TouchableOpacity style={styles.circular}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  noteText: {
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Note;
