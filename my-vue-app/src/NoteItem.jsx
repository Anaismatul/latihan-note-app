function NoteItem ({id, title, content, onDelete, onEdit, onCancel}) {
  return (
      <>
      <div className="flex-wrap">
      <div className="note bg-white mt-5 w-[300px] p-4 relative ">
        <button onClick={() => onDelete(id)} className="delete-note absolute right-5 top-2 font-bold text-2xl text-red-500">x</button>
        <p className="text-black">{id}</p>
        <h1 className="font-bold text-1xl gb">{title}</h1>
        <p>
          {content}
        </p>
        <button onClick={onEdit} className="bg-black hover:bg-zinc-500 px-5 py-3 text-white mt-4 rounded-lg">Edit Note</button>
      </div>
    </div>
      </>
  )
}

export default NoteItem;