import React, { useState } from "react";
import { RatingHeader } from "../modules";
import { RatingBlock } from "../components";
import { users } from "../TESTDATA/User";

const Rating = () => {
  console.log(users);
  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        <div className="block max-w-full  bg-white rounded-2xl ">
          <h2 className=" p-4 mb-4 text-center text-4xl">Рейтинг студентов</h2>
        </div>

        {users.map((user, index) => (
          <RatingBlock key={index} user={user} />
        ))}
      </div>
      <div>
        <RatingHeader />
      </div>
    </div>
  );
};

export default Rating;
