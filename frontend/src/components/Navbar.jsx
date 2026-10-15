import React from "react";
import { Link } from "react-router";
import CreatePage from "../pages/CreatePage";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header data-theme="sunset" className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-primary font-mono tracking-tight font-bold">MyNotes</h1>
          <div className="flex items-center gap-4">
            <Link to="/createnote" className="btn btn-primary">
              <PlusIcon className="h-5 w-5" /> {/* h-5 w-5 both h and w same xa vane we can use size-5 😮😮 */}
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <Link to="/">
      <h2 className="btn text-lg">MyNotes</h2></Link>
      <Link to="/createpage">
        <button className="btn btn-primary text-lg">+ New</button>
      </Link> */}
    </header>
  );
};

export default Navbar;
