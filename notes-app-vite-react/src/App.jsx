import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      text: "This is a sample note. Type your note and add it to the browser!",
      date: "10/2/2023",
      id: uuidv4(),
    },
  ]);
  const [searchText, setSearchText] = useState("");

  // you addNote function has to be here instead of
  // inside of the AddNote jsx because the state that
  // is controlling all of the notes created is at this level
  // hence, you would have to pass the function down to the child
  // in order to save the notes.
  // PROP DRILLING
  const addNote = (text) => {
    const date = new Date();
    const id = uuidv4();
    const newNote = {
      date: date.toLocaleDateString("en-SG"),
      id: id,
      text: text,
    };
    console.log(id);
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleSearchNote={setSearchText}
      />
    </>
  );
}

export default App;
