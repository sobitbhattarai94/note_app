import { useEffect, useState } from "react"
import toast from 'react-hot-toast'
import axios from "axios";
const NoteDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState();
  
  const fetchNoteDetail = async () =>{
    setIsLoading(true);
    try {
      const res = await axios.get(`http://loacalhost:5001/api/note:${id}`)
      console.log(res);
    } catch (error) {
      toast.error("error getting the note...");
      console.error("ERROR AYO HAI : ", error)
    } finally{
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchNoteDetail()
  },[])
  return (
    <div>
      <h2>title</h2>
      <p>content</p>
    </div>
  )
}

export default NoteDetailsPage