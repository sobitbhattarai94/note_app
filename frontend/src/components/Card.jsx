import { Loader2, PenSquare, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formateDate } from "../utils/util.js";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const Card = ({ note ,setNotes}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = async (e, id) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !==id)); // this filters the deleted note from the notes that is to be fetched immediately
      toast.success("successfully deleted the note!");
    } catch (error) {
      toast.error("error deleting the note!");
      console.error("error deleting the note: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Link to={`note/${note._id}`}>
      <div className="card min-h-[200px] bg-base-100 hover:shadow-xl transition-all duration-200 border-t-4 border-solid border-base-300 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-base-content">{note.title}</h2>
          <p className="text-base-content/70 line-clamp-2"> {note.content} </p>
          <div className="card-actions items-center justify-between mt-4">
            <span className="text-sm text-base-content/40">
              {formateDate(new Date(note.createdAt))}
            </span>
            <div className="flex gap-1 items-center justify-between">
              <PenSquare className="size-4" />
              <button
                className="btn btn-ghost text-error btn-xs"
                onClick={(e) => handleDelete(e, note._id)}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <Trash2Icon className="size-4" />}
              </button>
              {/* <button className="btn btn-accent">edit</button>
              <button className="btn btn-secondary">delete</button> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
