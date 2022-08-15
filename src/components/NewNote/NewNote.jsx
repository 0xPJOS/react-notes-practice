import React, { useState } from "react";
import NoteForm from "./NoteForm";

const NewNote = (props) => {
  const [toggleForm, setToggleForm] = useState(false);

  const newNoteHandler = (note) => {
    props.onAddNewNote(note);
  };

  const toggleFormHandler = (event) => {
    event.preventDefault();
    setToggleForm(!toggleForm);
  };

  return (
    <div className=" bg-slate-800 p-8 text-slate-300 rounded-lg w-full gap-8">
      {!toggleForm && (
        <button
          onClick={() => setToggleForm(!toggleForm)}
          className="bg-purple-600 hover:bg-purple-900 duration-200 px-4 py-2 rounded text-lg"
        >
          Create New Note
        </button>
      )}
      {toggleForm && (
        <NoteForm
          onNewNoteSubmitted={newNoteHandler}
          toggleForm={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewNote;
