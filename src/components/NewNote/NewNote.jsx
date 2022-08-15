import NoteForm from "./NoteForm";

const NewNote = (props) => {
  const newNoteHandler = (note) => {
    props.onAddNewNote(note);
  };

  return (
    <div className="w-full">
      <NoteForm onNewNoteSubmitted={newNoteHandler} />
    </div>
  );
};

export default NewNote;
