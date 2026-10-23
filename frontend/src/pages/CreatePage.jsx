import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Loader2 } from "lucide-react";
import toast from 'react-hot-toast';
import axios from 'axios'
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title.trim() || !content.trim()){
      toast.error("all fields are required...");
      return;
    }
    setIsLoading(true);
    try {
      await axios.post("http://localhost:5001/api/notes", {
        title, content
      })
      toast.success("note created successfully!");
      navigate("/");
    } catch (error) {
      toast.error("error creating notes!")
    }finally{
      setIsLoading(false);
    }
  };
  // useEffect(() => {}, []);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-base-200">
        <div className="max-w-6xl mx-auto container">
          <div className="p-4">
            <Link to="/" className="btn mb-6">
              <ArrowLeft /> Back
            </Link>

            <div className="card bg-base-100 ">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Create New Note</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Note Title"
                      className="input input-bordered"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      rows={6}
                      type="text"
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                      placeholder="Note Description..."
                      className="textarea textarea-bordered"
                    />
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary"
                    >
                      {isLoading ? <Loader2 className="animate-spin"/> : "Create Note"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
