import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router'
import note from '../data/mockdata.js'
const NoteDetailsPage = () => {

  const {id} = useParams();
  const tempNote = note.find(n => n.id == id);
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