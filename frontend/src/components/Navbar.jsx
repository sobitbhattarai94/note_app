import React from "react";
import { Link } from "react-router";
import CreatePage from "../pages/CreatePage";

const Navbar = () => {
  return (
    <div data-theme="sunset" className="flex justify-between py-4 border-b border-black/20 shadow-sm">
      <Link to="/">
      <h2 className="btn text-lg">MyNotes</h2></Link>
      <Link to="/createpage">
        <button className="btn btn-primary text-lg">+ New</button>
      </Link>
    </div>
  );
};

export default Navbar;
