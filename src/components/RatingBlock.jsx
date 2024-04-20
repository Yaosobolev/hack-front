import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RatingBlock = ({ user }) => {
  const { id, name, faculty, group, stars, isFavorite } = user;

  const [favorite, setFavorite] = useState(isFavorite);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="block max-w-full  bg-white rounded-2xl">
      <div className="flex justify-between items-center py-2 px-4 ">
        <div className="flex items-center">
          <span className="mr-4">{id + 1}</span>
          <Link to={`/profile/${id}`} className="text-black hover:underline">
            {name}
          </Link>
        </div>
        <Link
          to={`/faculty/${faculty}`}
          className="text-black hover:underline mr-4"
        >
          {faculty}
        </Link>
        <Link
          to={`/group/${group}`}
          className="text-black hover:underline mr-4"
        >
          {group}
        </Link>
        <div className="flex gap-x-1 items-center mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            fill="none"
            width="20 "
            height="20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="block"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>{" "}
          <span className="block">{stars}</span>
        </div>
        <button onClick={handleFavorite} className={`  `}>
          {favorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20 "
              height="20"
              fill="red"
              stroke="none"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20 "
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
