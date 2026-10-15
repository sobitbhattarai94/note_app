import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
// import note from '../data/mockdata.js'
const NoteDetailsPage = () => {
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
      try {
        const response = await fetch("/api/notes");
        if (!response.ok) throw new Error("failed to fetch lalaaaa!");
        const result = await response.json();
        setNotes(result);
        console.log(result);
      } catch (error) {
        console.error("error fetching the notes ", error);
      }
    };
    useEffect(() => {
      getNotes();
    }, []);
  const {id} = useParams();
  const tempNote = notes.find(n => n._id == id);
  console.log("tempnote: ",tempNote)
  return (
    <div className='px-8'>
      <Navbar />
      <div className='h-[calc(100vh-97px)] flex justify-center items-center  my-2'>
        <div className='w-[50%] shadow-md p-24 rounded-lg border-2 border-primary' >
          <h2 className='text-4xl mb-4'>{tempNote.title}</h2>
          <p className='text-justify'>{tempNote.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailsPage