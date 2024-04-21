import React from "react";
import { useLocation } from "react-router-dom";
import { AchievementBlock } from "../../components";

const Achievement = () => {
  const { pathname } = useLocation();

  const removeSlashes = (str) => {
    const segments = str.split("/");
    return segments[2];
  };
  console.log(pathname);
  const usersData = [1, 2, 3];
  const path = removeSlashes(pathname);
  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        <div className="block max-w-full  bg-white rounded-2xl ">
          <h2 className=" p-4 mb-4 text-center text-4xl">Список достижений</h2>
        </div>
        {usersData.map((user, index) => (
          <AchievementBlock key={user?.id || index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
