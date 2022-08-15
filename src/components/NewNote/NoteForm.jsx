import React, { useState } from "react";

const NoteForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredNote, setEnteredNote] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const noteChangeHandler = (e) => {
    setEnteredNote(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(new Date(enteredDate));

    const newNote = {
      id: Math.random().toString(),
      title: enteredTitle,
      date: new Date(enteredDate),
      body: enteredNote,
    };

    props.onNewNoteSubmitted(newNote);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredNote("");
  };

  return (
    <>
      <form
        action=""
        className="bg-slate-800 p-8 text-slate-300 rounded-lg w-full  sm:grid grid-cols-2 gap-8"
      >
        {/* column 1 */}
        <div className="flex flex-col gap-8 mb-8">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm">
              Give your note a title:
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your title"
              className="input-title rounded-md w-full h-12 border border-slate-500 bg-transparent focus:outline-none focus:border-sky-500 p-4 placeholder:text-slate-400"
              onChange={titleChangeHandler}
              value={enteredTitle}
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2 text-sm">
              Pick a date:
            </label>
            <input
              type="date"
              id="date"
              className="input-date w-full rounded h-12 bg-transparent border border-slate-500 focus:outline-none focus:border-sky-500 p-4 text-slate-400"
              onChange={dateChangeHandler}
              value={enteredDate}
              required
            />
          </div>
        </div>
        {/* column 2 */}
        <div>
          <label htmlFor="note-body" className="block mb-2 text-sm">
            Enter your note:
          </label>
          <textarea
            name=""
            id="note-body"
            cols="30"
            rows="10"
            className="w-full rounded bg-transparent border border-slate-500 focus:outline-none focus:border-sky-500 p-4 mb-8"
            onChange={noteChangeHandler}
            value={enteredNote}
            required
          ></textarea>
          <button
            typeof="submit"
            onClick={submitHandler}
            className="bg-purple-600 hover:bg-purple-900 duration-200 px-4 py-2 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
