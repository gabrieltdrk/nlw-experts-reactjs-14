import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
import { NotebookTabsIcon } from "lucide-react";

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes');

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return []
  })

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    
    setSearch(query);
  }

  const filteredSearch = search !== '' ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase())) : notes

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray);

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full">
        <input
          value={search}
          onChange={handleSearch} 
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder: text-slate-500"
          type="text" 
          placeholder="Busque suas notas..." 
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated}/>
        {filteredSearch.map(note => {
          return <NoteCard key={note.id} note={note}  />
        })}
      </div>
    </div>
  );
}
