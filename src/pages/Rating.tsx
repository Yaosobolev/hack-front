import React, { useEffect, useState } from "react";
import { RatingBlock } from "../components";
import { FilterHeader } from "../modules";
import { IUniversityResponse } from "../api/interface/IUniversity";

export type User = {
  id: number;
  name: string;
  faculty: string;
  group: string;
  flow: string;
  stars: number;
  isFavorite: boolean;
};

const Rating = () => {
  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        <div className="block max-w-full  bg-white rounded-2xl ">
          <h2 className=" p-4 mb-4 text-center text-4xl">Рейтинг студентов</h2>
        </div>

        {/* {users.map((user, index) => (
          <RatingBlock key={user?.id || index} user={user} />
        ))} */}
      </div>
      <div>
        <FilterHeader name="Rating" />
      </div>
    </div>
  );
};

export default Rating;
