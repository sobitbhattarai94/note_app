import { PenSquare, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { formateDate } from "../utils/util.js";

const Card = ({ note }) => {
  return (
    <Link to={`note/${note._id}`}>
      <div className="card min-h-[200px] bg-base-100 hover:shadow-xl transition-all duration-200 border-t-4 border-solid border-base-300 shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-base-content">{note.title}</h2>
          <p className="text-base-content/70 line-clamp-2"> {note.content} </p>
          <div className="card-actions items-center justify-between mt-4">
            <span className="text-sm text-base-content/40">
              { formateDate(new Date(note.createdAt))}
            </span>
            <div className="flex gap-1 items-center justify-between">
              <PenSquare className="size-4" />
              <button className="btn btn-ghost text-error btn-xs"><Trash2Icon className="size-4" /></button>
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
