import Note from "./Note";

const Notes = (props) => {
  return (
    <div className="grid sm:grid-cols-2 gap-8 bg-slate-200 p-8 rounded-lg">
      {props.items.map((item) => {
        return (
          <Note
            key={item.id}
            title={item.title}
            date={item.date}
            body={item.body}
          />
        );
      })}
    </div>
  );
};

export default Notes;
