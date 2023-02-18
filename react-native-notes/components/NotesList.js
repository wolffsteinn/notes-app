import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Note from "./Note";

const NotesList = ({ note, handleDeleteNote }) => {
  return (
    <View style={styles.notesList}>
      {note.map((notes, index) => {
        return (
          <TouchableOpacity onPress={() => handleDeleteNote(index)}>
            <Note key={index} notes={notes} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  notesList: {
    marginTop: 30,
  },
});

export default NotesList;
