import React from "react";

import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../pages/Rating";

type UserProps = {
  user: User;
};

export const AchievementBlock: React.FC<UserProps> = ({ user }) => {
  const { id, firstname, lastname, group, isFavorite } = user;

  const [favorite, setFavorite] = React.useState(isFavorite);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const shortGroupName = group?.flow?.department?.faculty?.name
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  return (
    <div className="block max-w-full  bg-white rounded-2xl">
      <div className="flex justify-between items-center py-2 px-4 ">
        <div className="flex items-center">
          <span className="mr-4">{id + 1}</span>
          <Link to={`/profile/${id}`} className="text-black hover:underline">
            {firstname + " " + lastname}
          </Link>
        </div>
        <Link
          to={`/faculty/${group?.flow?.department?.faculty.id}`}
          className="text-black hover:underline mr-4"
        >
          {shortGroupName}
        </Link>
        <Link
          to={`/group/${group?.id}`}
          className="text-black hover:underline mr-4"
        >
          {group?.flow?.name + "-" + group?.name}
        </Link>
        <div className="flex gap-x-1 items-center mr-4">
          <FaStar className="text-yellow-300" />
          <span className="block">{1}</span>
        </div>
        <button onClick={() => handleFavorite()} className={`  `}>
          {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};
