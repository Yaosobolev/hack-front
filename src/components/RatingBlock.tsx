import React from "react";

import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  faculty: string;
  group: string;
  flow: string;
  stars: number;
  isFavorite: boolean;
};

type UserProps = {
  user: User;
};

export const RatingBlock: React.FC<UserProps> = ({ user }) => {
  const { id, name, faculty, group, flow, stars, isFavorite } = user;

  const [favorite, setFavorite] = React.useState(isFavorite);

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
          to={`/group/${flow + "-" + group}`}
          className="text-black hover:underline mr-4"
        >
          {flow + "-" + group}
        </Link>
        <div className="flex gap-x-1 items-center mr-4">
          <FaStar className="text-yellow-300" />
          <span className="block">{stars}</span>
        </div>
        <button onClick={() => handleFavorite()} className={`  `}>
          {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};
