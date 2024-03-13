import { useRef, useState } from 'react';
import './App.css'
import NoteItem from './NoteItem';
import FormTambah from './FormTambah';
import { nanoid } from 'nanoid';
import FormEdit from './FormEdit';

function Note() {
  const [count, setCount] = useState(0)
  const [notes, setNote] = useState([])
  const [currentNoteId,setCurrentNoteId]= useState(null)
  const [isEditKlik,setisEditKlik]= useState(false)
  

  const addNote = (title, content) => {
    setNote((oldNote) => {
      const noteBaru = {
        id: nanoid(),
        title: title,
        content: content
      }


      return [...oldNote, noteBaru]
    })
  }

  const deleteNote = (id) => {
    setNote((oldNotes) => oldNotes.filter((note) => note.id !== id));
  }

  const editNote = (id, title, content) => {
    setNote((oldNotes) => 
    oldNotes.map((note) => (note.id === id ? {...note, title, content}: note ))
    );
    setCurrentNoteId(null)
    setisEditKlik(false)
  }

  const cancelEdit = () =>{
    setCurrentNoteId(null);
    setisEditKlik(false);
  }

  return (
    <>
      <div className="App bg-blue-100 h-screen">
        <h1 className="text-center text-5xl p-5" >React Notes</h1>
        <div className="create-note w-[400px] mx-auto">
       
        {isEditKlik ? <FormEdit onEdit = {editNote} currentNoteId={currentNoteId}  notes={notes} onCancel={cancelEdit}/>:   <FormTambah onAdd={addNote} onCancel={cancelEdit}/>}
          <div className="notes-container border-t-2-blue-300 m-10 flex flex-wrap"></div>
        </div>
      </div>

      <div className="flex gap-10">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} title={note.title} content={note.content} onDelete={deleteNote} onEdit={() => {setCurrentNoteId(note.id); setisEditKlik(true)}} />
        ))}
      </div>



    </>
  )
}

export default Note;