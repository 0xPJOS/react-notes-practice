import React, { useState } from "react";
import Notes from "./components/Notes/Notes";
import NewNote from "./components/NewNote/NewNote";
import Header from "./components/Header/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: "n1",
      title: "I'm enjoying learning to code",
      body: "I've worked on many sites as a graphic designer but never took the time to learn properly. I built this with React and Tailwindcss. Used Vite to build. Much faster than CRA.",
      date: new Date(2022, 8, 15),
    },
  ]);

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
