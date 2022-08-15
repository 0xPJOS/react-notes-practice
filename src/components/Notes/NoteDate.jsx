const NoteDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className="bg-slate-300 rounded px-1.5 py-0.5 inline-block">
        <div className="text-slate-600 text-sm font-DMMono">{`${month} ${day} ${year}`}</div>
      </div>
    </div>
  );
};

export default NoteDate;
