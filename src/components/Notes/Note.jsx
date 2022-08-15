import Card from "../../UI/Card";
import NoteDate from "./NoteDate";

const Note = (props) => {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-5">
      <NoteDate date={props.date} />
      <div className="text-slate-900">
        <h2 className="text-3xl font-bold mb-4">{props.title}</h2>
        <p className="text-base text-slate-600">{props.body}</p>
      </div>
    </div>
  );
};

export default Note;
