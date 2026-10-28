import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { ArrowLeft, Loader2, Trash } from "lucide-react";
import meroAxios from "../utils/axios";
const NoteDetailsPage = () => {
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      // setIsLoading(true);
      try {
        const res = await meroAxios.get(`/notes/${id}`);
        // const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
        setNote(res.data.note);
      } catch (error) {
        toast.error("error fetching the note: ", error);
        console.error("error fething the note: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    try {
      if(!window.confirm("are you sure?")) return;
      await meroAxios.delete(`/notes/${id}`);
      // await axios.delete(`http://localhost:5001/api/notes/${id}`);
      toast.success("successfully deleted!");
      navigate("/");
    } catch (error) {
      toast.error("something went wrong!");
      console.error("error deleting the note: ", error);
    }
  };
   const handleUpdate = async()=> {
    // toast("handle update function for now")
    if(!note.title.trim() || !note.content.trim()) {
      toast.error("please fill all fields");
      return;
    }
    setUpdate(true);
    try{
      await meroAxios.put(`/notes/${id}`, note);
      // await axios.put(`http://localhost:5001/api/notes/${id}`, note);
      toast.success("note updated successfully!");
    }catch(e){
      console.error("error updating the note: ", e);
      toast.error("couldn't update!")
    } finally{
      setUpdate(false);
    }
   }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin size-10" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between item-center mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeft className="size-5" />
              Back
            </Link>
            <button
              className="btn btn-outline btn-error"
              onClick={handleDelete}
            >
              <Trash className="size-5" />
              Delete
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  onChange={(e) => {
                    setNote({ ...note, title: e.target.value });
                  }}
                  value={note.title}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Note Description"
                  value={note.content}
                  className="textarea textarea-bordered h-32"
                  onChange={(e) => {
                    setNote({ ...note, content: e.target.value });
                  }}
                />
              </div>

              <div className="card-action flex justify-end">
                <button className="btn btn-primary" disabled={update} onClick={handleUpdate}>
                  {update ?  <Loader2 className="animate-spin size-5" /> : "Update Note"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsPage;
