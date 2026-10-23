import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useParams } from "react-router";
import { ArrowLeft, LoaderIcon, Trash } from "lucide-react";
const NoteDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState(null);
  const { id } = useParams();

  // const updateNote = async () =>{
  //   setIsLoading(true);
  //   try {
  //     await axios.update(`http://localhost:5001/api/notes/${id}`, {
  //       title, content
  //     });
  //     toast.success("note updated successfully!");
  //   } catch (error) {
  //     console.error("error updating the note: ", error);
  //     toast.error("error updating the note!");
  //   }finally{
  //     setIsLoading(false);
  //   }
  // }
  useEffect(() => {
    const fetchNoteDetail = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
        setNote(res.data.note);
      } catch (error) {
        console.error("error getting the note: ", error);
        toast.error("error getting the note!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchNoteDetail();
  }, [id]);

  console.log(note);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeft className="h-5 w-f" />
              Back
            </Link>
            <button className="btn btn-error btn-outline">
              {" "}
              <Trash />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => {
                    setNote({ ...note, title: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsPage;
