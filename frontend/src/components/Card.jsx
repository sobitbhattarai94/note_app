import React from "react";
import { Link } from "react-router";

const Card = ({ title, desc, id }) => {
  return (
    <Link to={`note/${id}`}>
      <div className="card bg-base-100 w-96 h-fit shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p> {desc} </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
