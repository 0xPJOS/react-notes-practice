import React, { useState } from "react";
import Notes from "./components/Notes/Notes";
import NewNote from "./components/NewNote/NewNote";
import Header from "./components/Header/Header";

const DUMMY_DATA = [
  {
    id: "n1",
    title: "I made this with React",
    body: "With Tailwind CSS and I used Vite instead of CRA because it's 10x faster.",
    date: new Date(2022, 7, 15),
  },
];

function App() {
  const [notes, setNotes] = useState(DUMMY_DATA);

  const newNoteHandler = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="flex justify-center mb-9">
      <div className="mx-8 sm:mx-8 md:max-w-4xl  my-10 flex flex-col gap-8 font-Inter">
        <Header />
        <NewNote onAddNewNote={newNoteHandler} />
        <Notes items={notes} />
      </div>
    </div>
  );
}

export default App;
