import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import NotesList from "./components/NotesList";

export default function App() {
  const [note, setNote] = useState([]);
  const [text, setText] = useState("");

  const handleAddNote = () => {
    setNote([...note, text]);
    setText("");
  };

  const handleDeleteNote = (index) => {
    //filter based on its index
    let notesCopy = [...note];
    notesCopy.splice(index, 1);
    setNote(notesCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.noteWrapper}>
          <Text style={styles.title}>Today's Task</Text>
          <View>
            <NotesList note={note} handleDeleteNote={handleDeleteNote} />
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeNoteWrapper}
      >
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder="Enter your note here"
        />
        <TouchableOpacity onPress={() => handleAddNote()}>
          <View style={styles.addNoteWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  noteWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addNoteWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  writeNoteWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
